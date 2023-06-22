const { EventFactory, Types } = require('@ellementul/united-events-environment')
const type = Types.Object.Def({
  system: "World",
  action: "Load"
}, true) 
module.exports = EventFactory(type)