const { EventFactory, Types } = require('@ellementul/united-events-environment')
const type = Types.Object.Def({
  system: "Characters",
  entity: "Character",
  state: "Spawned",
  characterUuid: Types.UUID.Def()
}, true) 
module.exports = EventFactory(type)