const { Member, events: { time } } = require('@ellementul/united-events-environment')

const startSessionEvent = require("../events/start-session")
const readyEvent = require("../events/ready-players-manager")
const connectedEvent = require("../events/players/connected-player")
const disconnectedEvent = require("../events/players/disconnected-player")
const updateCountEvent = require("../events/players/update-players-count")
const update = require("../events/players/update-players-list")
const pingEvent = require("../events/players/ping-players")
const pongEvent = require("../events/players/pong-players")

const PLAYERS_LIMIT = 16
const MSTIMELIMIT = 1000
const DEF_COOLDOWN_CONNECT = 20
class PlayersManager extends Member {
  constructor() {
    super()

    this._players = new Map
    this.timeout = 0
    this.timePing = 0
    this.coolDownConnect = DEF_COOLDOWN_CONNECT

    this.onEvent(startSessionEvent, () => this.start())
    this.onEvent(time, payload => this.tick(payload))
    this.onEvent(pongEvent, payload => this.pong(payload))
  }

  start() {
    this.send(readyEvent)
  }

  pong({  playerUuid }) {
    if(!this._players.has(playerUuid) && this._players.size < PLAYERS_LIMIT)
      this.connectPlayer(playerUuid)

    if(this._players.has(playerUuid))
      this._players.get(playerUuid).pong = true
  }

  connectPlayer(playerUuid) {
    if(this.coolDownConnect > 0) return

    this.coolDownConnect = DEF_COOLDOWN_CONNECT

    this._players.set(playerUuid, {
      pong: false,
      deltaTime: 0
    })
    console.info("Connected new player: ", playerUuid)
    
    this.send(connectedEvent, { state: playerUuid })
    this.send(updateCountEvent, { state: this._players.size })
    this.send(update, { state: this.getPlayers() })
    
  }

  tick({ state: { mstime }}) {
    this.timePing = mstime

    if(this.checkPlayersPong()) {
      this.timeout = this.timePing
      this.clearPongs()
      this.update()
    } else if(this.timePing - this.timeout > MSTIMELIMIT) {
      this.timeout = this.timePing
      this.clearPlayersWithoutPong()
      this.update()
    }
  }

  update() {
    if(this.coolDownConnect > 0)
      this.coolDownConnect--

    this.send(update, { state: this.getPlayers() })
    this.send(updateCountEvent, { state: this._players.size })
    this.send(pingEvent)
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

  clearPlayersWithoutPong() {
    for (const [uuid, player] of this._players) {
      if(!player.pong)
        this.diconnectedPlayers(uuid)
    }
  }

  diconnectedPlayers(playerUuid) {
    this._players.delete(playerUuid)
    console.info("Disconnected player: ", playerUuid)
    this.send(updateCountEvent, { state: this._players.size })
    this.send(disconnectedEvent, { state: playerUuid })
  }
}

module.exports = { PlayersManager }