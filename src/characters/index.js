const { Member, Types } = require('@ellementul/united-events-environment')
const genUuid = Types.UUID.Def().rand

const connectedPlayerEvent = require("../events/connected-player")

class CharactersManager extends Member {
  constructor() {
    super()

    this._characters = new Map
    this._players = new Map

    
    this.onEvent(connectedPlayerEvent, payload => this.addNewCharacter(payload))
  }

  addNewCharacter({ state: playerUid }) {
    const newCharacter = new Character
    this._characters.set(newCharacter.uuid, newCharacter)

    if(playerUid)
      this._players.set(playerUid, newCharacter.uuid)
  }
}

class Character {
  constructor() {
    this.uuid = genUuid()
    this.velocity = { x: 0, y: 0 }
    this.box = {
      width: 64,
      height: 96
    }
  }
}

module.exports = { CharactersManager }