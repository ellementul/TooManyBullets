const { EventFactory, Types } = require('@ellementul/united-events-environment')
const type = Types.Object.Def({
  access: "Local",
  system: "Characters",
  entity: "Character",
  action: "Spawn"
}, true) 
module.exports = EventFactory(type)