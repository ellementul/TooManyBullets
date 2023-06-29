const { Member, Types } = require('@ellementul/united-events-environment')
const genUuid = Types.UUID.Def().rand

const connectedPlayerEvent = require("../events/connected-player")
const spawnEvent = require("../events/spawn-character")
const readyEvent = require("../events/ready-spawned")

class CharactersManager extends Member {
  constructor() {
    super()

    this._characters = new Map
    this._players = new Map

    
    this.onEvent(connectedPlayerEvent, payload => this.addNewCharacter(payload))
    this.onEvent(readyEvent, payload => this.spawnCharacter(payload))
  }

  addNewCharacter({ state: playerUid }) {
    const newCharacter = new Character
    this._characters.set(newCharacter.uuid, newCharacter)

    if(playerUid)
      this._players.set(playerUid, newCharacter.uuid)

    this.send(spawnEvent, { state: { uuid: newCharacter.uuid } })
  }

  spawnCharacter({ characterUuid, position }) {
    const characterShape = this._characters.get(characterUuid).spawn({ position })
    console.log(characterShape)
  }
}

const CREATED = "Created"
const SPAWNED = "Spawned"
class Character {
  constructor() {
    this.uuid = genUuid()
    this.velocity = { x: 0, y: 0 }
    this.box = {
      width: 64,
      height: 96
    }
    this._state = CREATED
  }

  spawn({ position: { x, y } }) {
    if(this._state !== CREATED)
      return
  
    this._state = SPAWNED

    const { width, height } = this.box
    return {
      uuid: this.uuid,
      box: { width, height },
      position: { x, y }
    }
  }
}

module.exports = { CharactersManager }