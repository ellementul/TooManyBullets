const { EventFactory, Types } = require('@ellementul/united-events-environment')
const type = Types.Object.Def({
  system: "Game",
  entity: "World",
  action: "Reload"
}, true) 
module.exports = EventFactory(type)