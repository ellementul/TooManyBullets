const { EventFactory, Types } = require('@ellementul/united-events-environment')
const type = Types.Object.Def({
  access: "Local",
  system: "Physic",
  entity: "Object",
  action: "OutLimit",
  state: Types.UUID.Def()
})

module.exports = EventFactory(type)