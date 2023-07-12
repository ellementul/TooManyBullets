const { EventFactory, Types } = require('@ellementul/united-events-environment')
const type = Types.Object.Def({
  system: "PlayersManagment",
  entity: "Player",
  action: "Disconnect",
  state: Types.UUID.Def()
}, true) 
module.exports = EventFactory(type)