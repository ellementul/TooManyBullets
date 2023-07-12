const { EventFactory, Types } = require('@ellementul/united-events-environment')
const type = Types.Object.Def({
  system: "HPDamage",
  entity: "HP",
  action: "Create"
}, true) 
module.exports = EventFactory(type)