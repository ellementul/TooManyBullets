const { EventFactory, Types } = require('@ellementul/united-events-environment')
const type = Types.Object.Def({
  access: "Local",
  system: "PlayersManagment",
  entity: "Player",
  action: "Connect",
  state: Types.UUID.Def()
}, true) 
module.exports = EventFactory(type)