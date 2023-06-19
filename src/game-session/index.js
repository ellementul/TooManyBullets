const { Member, events: { readyMembers } } = require('@ellementul/united-events-environment')
const startSessionEvent = require("../events/start-session")
const readyPLayersManagerEvent = require("../events/ready-players-manager")
const loadWorldEvent = require("../events/load-world")
const readyWorldEvent = require("../events/ready-world")

const START = Symbol("Start")
const PAUSE = Symbol("Pause")

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
    this.onEvent(readyWorldEvent, () => this.makePause())
    this.send(loadWorldEvent)
  }
  makePause() {
    this.state = PAUSE
  }
}

module.exports = { GameSession }