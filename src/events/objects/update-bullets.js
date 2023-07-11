const { EventFactory, Types } = require('@ellementul/united-events-environment')
const type = Types.Object.Def({
  system: "World",
  entity: "Bullets",
  action: "Update"
}, true) 
module.exports = EventFactory(type)