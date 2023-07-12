const { EventFactory, Types } = require('@ellementul/united-events-environment')
const type = Types.Object.Def({
  system: "Physic",
  entity: "Objects",
  action: "Overlap"
}, true) 
module.exports = EventFactory(type)