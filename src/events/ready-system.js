const { EventFactory, Types } = require('@ellementul/united-events-environment')
const type = Types.Object.Def({
  system: "World",
  entity: "System",
  action: "Ready",
  state: {
    system: Types.Any.Def([
      Types.Const.Def("Physic"),
      Types.Const.Def("Tiles"),
      Types.Const.Def("Characters"),
    ])
  }
}, true) 
module.exports = EventFactory(type)