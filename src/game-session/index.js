const { Member, events: { readyMembers } } = require('@ellementul/united-events-environment')
const startSessionEvent = require("../events/start-session")
const readyPlayersManagerEvent = require("../events/ready-players-manager")
const loadWorldEvent = require("../events/load-world")
const readyWorldEvent = require("../events/ready-world")
const runWorldEvent = require("../events/run-world")
const stopWorldEvent = require("../events/stop-world")
const reloadWorldEvent = require("../events/reload-world")
const updatePlayersCountEvent = require("../events/players/update-players-list")
const updatePlatfromsCountEvent = require("../events/objects/update-platforms-count")

const START = Symbol("Start")
const LOADING = Symbol("Loading")
const PAUSE = Symbol("Pause")
const RUNNING = Symbol("Running")

class GameSession extends Member {
  constructor() {
    super()

    this._state = START
    this.timeout = null

    this.onEvent(readyMembers, () => this.startSession())
    this.onEvent(readyPlayersManagerEvent, () => this.loadSession())
    this.onEvent(readyWorldEvent, () => this.finishLoadingWorld())
    this.onEvent(updatePlayersCountEvent, payload => this.isCountPlayers(payload))
    this.onEvent(updatePlatfromsCountEvent, payload => this.isCountPlatforms(payload))
  }

  startSession() {
    if(this._state == START)
      this._state = LOADING
    else
      return

    this.send(startSessionEvent)
  }

  loadSession() {
    this.send(loadWorldEvent)
  }

  finishLoadingWorld(){
    if(this._state == LOADING)
      this._state = PAUSE

    if(this.timeout) clearTimeout(this.timeout)
    this.timeout = setTimeout(() => this.send(reloadWorldEvent), 10*60*1000)
  }

  isCountPlayers({ state: players }) {
    if(players.length > 0)
      this.run()
    else
      this.makePause()
  }

  isCountPlatforms({ state: countPlatforms }) {
    if(countPlatforms < 90)
      this.send(reloadWorldEvent)
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