const { EventFactory, Types } = require('@ellementul/united-events-environment')

const CHARACTERS = "Characters"

const type = Types.Object.Def({
  system: "Physic",
  entity: "Object",
  action: "Create",
  state: Types.Object.Def({
    uuid: Types.UUID.Def(),
    shape: "Box",
    groupCollision: CHARACTERS
  }, true)
})

module.exports = EventFactory(type)