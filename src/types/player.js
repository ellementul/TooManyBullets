const { Types } = require('@ellementul/united-events-environment')
const MAX_PLAYERS = 4
const PlayerType = Types.Object.Def({
  uuid: Types.UUID.Def()
})
const PlayersListType = Types.Array.Def(PlayerType, MAX_PLAYERS, true)
module.exports = {
  PlayerType,
  PlayersListType
}