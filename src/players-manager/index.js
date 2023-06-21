const { Member } = require('@ellementul/united-events-environment')
const { events: { time } } = require('@ellementul/uee-timeticker')
const startSessionEvent = require("../events/start-session")
const readyEvent = require("../events/ready-players-manager")
const updateCountEvent = require("../events/update-players-count")
const pingEvent = require("../events/ping-players")
const pongEvent = require("../events/pong-players")

let timeout = 0
const MSTIMELIMIT = 500
class PlayersManager extends Member {
  constructor() {
    super()

    this._players = new Map

    this.onEvent(startSessionEvent, () => this.start())
  }

  start() {
    this.onEvent(time, payload => this.tick(payload))
    this.onEvent(pongEvent, payload => this.pong(payload))
    this.send(readyEvent)
  }

  pong({  playerUuid }) {
    if(!this._players.has(playerUuid))
      this.connectPlayer(playerUuid)

    this._players.get(playerUuid).pong = true
  }

  connectPlayer(playerUuid) {
    this._players.set(playerUuid, {
      pong: false
    })

    this.send(updateCountEvent, { state: this._players.size })
  }

  tick({ state: { mstime }}) {
    if(mstime - timeout > MSTIMELIMIT) {
      timeout = mstime
      this.runOutTimeout()
    }
    else {
      this.checkPlayersPong()
    }
  }

  checkPlayersPong() {
    let allPong = true
    for (const [uuid, player] of this._players) {
      allPong &= player.pong
    }

    if(allPong) {
      this.clearPongs()
      this.send(pingEvent)
    }
  }

  clearPongs() {
    for (const [uuid, player] of this._players) {
      player.pong = false
    }
  }

  runOutTimeout() {
    this.clearPlayersWithoutPong()
    console.log(this._players)
    this.send(pingEvent)
  }

  clearPlayersWithoutPong() {
    for (const [uuid, player] of this._players) {
      if(!player.pong)
        this.diconnectedPlayers(uuid)
    }
  }

  diconnectedPlayers(playerUuid) {
    this._players.delete(playerUuid)
    this.send(updateCountEvent, { state: this._players.size })
  }
}

module.exports = { PlayersManager }