const { EventFactory, Types } = require('@ellementul/united-events-environment')
const type = Types.Object.Def({
  access: "Local",
  system: "Physic",
  entity: "Object",
  action: "Update"
}, true) 
module.exports = EventFactory(type)