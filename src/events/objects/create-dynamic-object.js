const { EventFactory, Types } = require('@ellementul/united-events-environment')

const CHARACTERS = Types.Const.Def("Characters")
const BULLETS = Types.Const.Def("Bullets")

const type = Types.Object.Def({
  access: "Local",
  system: "Physic",
  entity: "Object",
  action: "Create",
  state: Types.Object.Def({
    uuid: Types.UUID.Def(),
    shape: "Box",
    groupCollision: Types.Any.Def([CHARACTERS, BULLETS])
  }, true)
})

module.exports = EventFactory(type)