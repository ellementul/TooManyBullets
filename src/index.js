const { UnitedEventsEnv, Room } = require('@ellementul/united-events-environment')
const { Ticker } = require('@ellementul/uee-timeticker')
const { WsTransport } = require('@ellementul/uee-ws-transport')
const { WsBrowserTransport } = require('@ellementul/uee-ws-browser-transport')
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

function HostFactory ({ address } = {}) {
  const room = new Room
  room.addMember(Ticker)
  room.addMember(GameSession)
  room.addMember(PlayersManager)
  room.addMember(Store)
  room.addMember(World)
  room.addMember(Physic)
  room.addMember(Tiles)
  room.addMember(Spawns)
  room.addMember(CharactersManager)
  room.addMember(BulletsManager)
  room.addMember(HPDamage)

  const env = new UnitedEventsEnv(room)
  const config = env.getConfig()
  const isNodeApi = config.env.nodejsApi
  const signalAddress = address || config.signalAddress

  const transport = isNodeApi ? new WsTransport(signalAddress) : new WsBrowserTransport(signalAddress)

  env.setupLogging({})

  env.build(transport)

  return env
}

module.exports = { HostFactory }