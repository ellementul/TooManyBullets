const { EventFactory, Types } = require('@ellementul/united-events-environment')
const { PlayersListType } = require("../../types/player")
const type = Types.Object.Def({
  access: "Local",
  system: "PlayersManagment",
  entity: "Players",
  state: PlayersListType
})
module.exports = EventFactory(type)