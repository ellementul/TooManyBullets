const { UnitedEventsEnvironment: UEE } = require('@ellementul/united-events-environment')
const { WsTransport } = require('@ellementul/uee-ws-transport')
const { Logging } = require('./logging')

const { GameSession } = require("./game-session")
const { PlayersManager } = require("./players-manager")
const { World } = require("./world")
const { Store } = require("./store")
const { Physic } = require("./physic")
const { Tiles } = require("./tiles")
const { Spawns } = require("./spawns")
const { CharactersManager } = require("./characters")
const { BulletsManager } = require("./bullets")
const { HPDamage } = require("./hp-damage")

const membersList = {
  roles: [
    GameSession,
    PlayersManager,
    World,
    Store,
    Physic,
    Tiles,
    Spawns,
    CharactersManager,
    BulletsManager,
    HPDamage
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
  signalServerAddress: "ws://45.87.247.189:8080",
})