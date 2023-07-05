const { UnitedEventsEnvironment: UEE } = require('@ellementul/united-events-environment')
const { WsTransport } = require('@ellementul/uee-ws-browser-transport')
const { Logging } = require('./logging')

const { GameSession } = require("./game-session")
const { PlayersManager } = require("./players-manager")
const { World } = require("./world")
const { Physic } = require("./physic")
const { Tiles } = require("./tiles")
const { Spawns } = require("./spawns")
const { CharactersManager } = require("./characters")

const membersList = {
  roles: [
    GameSession,
    PlayersManager,
    World,
    Physic,
    Tiles,
    Spawns,
    CharactersManager
  ]
}

env = new UEE({
  Transport: WsTransport,
  membersList,
  logging: Logging(),
  isShowErrors: true
})


env.run({
  isHost: true,
  signalServerAddress: "ws://192.168.0.4:8080",
})