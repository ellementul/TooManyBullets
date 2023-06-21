const { Member, events: { readyMembers } } = require('@ellementul/united-events-environment')
const startSessionEvent = require("../events/start-session")
const readyPLayersManagerEvent = require("../events/ready-players-manager")
const loadWorldEvent = require("../events/load-world")
const readyWorldEvent = require("../events/ready-world")
const updatePlayersCountEvent = require("../events/update-players-count")

const START = Symbol("Start")
const PAUSE = Symbol("Pause")
const RUNNING = Symbol("Running")

class GameSession extends Member {
  constructor() {
    super()

    this.onEvent(readyMembers, () => this.startSession())
    this.state = START
  }

  startSession() {
    this.onEvent(readyPLayersManagerEvent, () => this.loadSession())
    this.send(startSessionEvent)
  }

  loadSession() {
    this.onEvent(readyWorldEvent, () => this.finishLoadingWorld())
    this.send(loadWorldEvent)
  }

  finishLoadingWorld(){
    this.onEvent(updatePlayersCountEvent, payload => this.isCountPlayers(payload))
  }

  isCountPlayers({ state }) {
    if(state > 0)
      this.run()
    else
      this.makePause()
  }

  run() {
    this.state = RUNNING
  }

  makePause() {
    this.state = PAUSE
  }
}

module.exports = { GameSession }