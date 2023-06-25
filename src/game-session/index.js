const { Member, events: { readyMembers } } = require('@ellementul/united-events-environment')
const startSessionEvent = require("../events/start-session")
const readyPlayersManagerEvent = require("../events/ready-players-manager")
const loadWorldEvent = require("../events/load-world")
const readyWorldEvent = require("../events/ready-world")
const runWorldEvent = require("../events/run-world")
const stopWorldEvent = require("../events/pause-world")
const updatePlayersCountEvent = require("../events/update-players-count")

const START = Symbol("Start")
const LOADING = Symbol("Loading")
const PAUSE = Symbol("Pause")
const RUNNING = Symbol("Running")

class GameSession extends Member {
  constructor() {
    super()

    this.onEvent(readyMembers, () => this.startSession())
    this._state = START
  }

  startSession() {
    if(this._state == START)
      this._state = LOADING
    else
      return

    this.onEvent(readyPlayersManagerEvent, () => this.loadSession())
    this.send(startSessionEvent)
  }

  loadSession() {
    this.onEvent(readyWorldEvent, () => this.finishLoadingWorld())
    this.send(loadWorldEvent)
  }

  finishLoadingWorld(){
    if(this._state == LOADING)
      this._state = PAUSE
    else
      return

    this.onEvent(updatePlayersCountEvent, payload => this.isCountPlayers(payload))
  }

  isCountPlayers({ state }) {
    if(state > 0)
      this.run()
    else
      this.makePause()
  }

  run() {
    if(this._state == PAUSE) {
      this._state = RUNNING
      this.send(runWorldEvent)
    }
  }

  makePause() {
    if(this._state == RUNNING) {
      this._state = PAUSE
      this.send(stopWorldEvent)
    }
  }
}

module.exports = { GameSession }