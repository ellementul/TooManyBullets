const { EventFactory, Types } = require('@ellementul/united-events-environment')

const CHARACTERS = Types.Const.Def("Characters")
const BULLETS = Types.Const.Def("Bullets")

const type = Types.Object.Def({
  system: "Physic",
  entity: "Object",
  action: "Remove",
  state: Types.UUID.Def()
})

module.exports = EventFactory(type)