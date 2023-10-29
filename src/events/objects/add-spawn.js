const { EventFactory, Types } = require('@ellementul/united-events-environment')
const type = Types.Object.Def({
  access: "Local",
  system: "World",
  entity: "Spawn",
  action: "Add"
}, true) 
module.exports = EventFactory(type)