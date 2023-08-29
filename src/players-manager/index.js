const { Member, events: { time } } = require('@ellementul/united-events-environment')

const startSessionEvent = require("../events/start-session")
const readyEvent = require("../events/ready-players-manager")
const connectedEvent = require("../events/players/connected-player")
const disconnectedEvent = require("../events/players/disconnected-player")
const updateCountEvent = require("../events/players/update-players-count")
const update = require("../events/players/update-players-list")
const pingEvent = require("../events/players/ping-players")
const pongEvent = require("../events/players/pong-players")

const MSTIMELIMIT = 1000
class PlayersManager extends Member {
  constructor() {
    super()

    this._players = new Map
    this.timeout = 0
    this.timePing = 0
    this.latsConnect = 0
    this.coolDownConnect = 250

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

    if(this._players.has(playerUuid))
      this._players.get(playerUuid).pong = true
  }

  isCoolDown() {
    return this.coolDownConnect >  Date.now() - this.latsConnect
  }

  connectPlayer(playerUuid) {
    if(this.isCoolDown()) return

    this.latsConnect = Date.now()

    this._players.set(playerUuid, {
      pong: false,
      deltaTime: 0
    })

    this.send(connectedEvent, { state: playerUuid })
    this.send(updateCountEvent, { state: this._players.size })
    this.send(update, { state: this.getPlayers() })
  }

  tick({ state: { mstime }}) {
    this.timePing = mstime

    if(this.checkPlayersPong()) {
      this.timeout = this.timePing
      this.clearPongs()
      this.send(pingEvent)

      this.send(update, { state: this.getPlayers() })
      this.send(updateCountEvent, { state: this._players.size })
    } else if(this.timePing - this.timeout > MSTIMELIMIT) {
      this.timeout = this.timePing
      this.runOutTimeout()

      this.send(update, { state: this.getPlayers() })
      this.send(updateCountEvent, { state: this._players.size })
    }
  }

  getPlayers() {
    const players = []

    for (const [uuid, player] of this._players) {
      players.push({ uuid })
    }

    return players
  }

  checkPlayersPong() {
    let allPong = true
    for (const [uuid, player] of this._players) {
      allPong &= player.pong
    }

    return allPong
  }

  clearPongs() {
    for (const [uuid, player] of this._players) {
      player.pong = false
    }
  }

  runOutTimeout() {
    this.clearPlayersWithoutPong()
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
    this.send(disconnectedEvent, { state: playerUuid })
  }
}

module.exports = { PlayersManager }