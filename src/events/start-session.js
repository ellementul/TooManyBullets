const { EventFactory, Types } = require('@ellementul/united-events-environment')
const type = Types.Object.Def({
  system: "Game",
  entity: "Session",
  state: "Start"
}, true) 
module.exports = EventFactory(type)