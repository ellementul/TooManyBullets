const { Member, Types } = require('@ellementul/united-events-environment')
const genUuid = Types.UUID.Def().rand

const connectedPlayerEvent = require("../events/players/connected-player")
const disconnectedEvent = require("../events/players/disconnected-player")
const spawnEvent = require("../events/objects/spawn-character")
const readyEvent = require("../events/objects/ready-spawned")
const createDynamicObject = require("../events/objects/create-dynamic-object")
const updateDynamicObject = require("../events/objects/update-dynamic-object")
const removeDynamicObject = require("../events/objects/remove-dynamic-object")
const createHPEvent = require("../events/objects/create-hp")
const deleteHPEvent = require("../events/objects/remove-hp")
const destroyEvent = require("../events/objects/destroyed-object")
const physicUpdateEvent = require("../events/objects/update-physic")
const updateEvent = require("../events/objects/update-characters")
const movingEvent = require("../events/players/moving-direct")
const shotActionEvent = require("../events/players/shot-action")
const spwanBulletEvent = require("../events/objects/spawn-bullet")

class CharactersManager extends Member {
  constructor() {
    super()

    this._characters = new Map
    this._players = new Map

    
    this.onEvent(connectedPlayerEvent, payload => this.addNewCharacter(payload))
    this.onEvent(disconnectedEvent, payload => this.deleteCharactersByPlayer(payload))
    this.onEvent(readyEvent, payload => this.spawnCharacter(payload))
    this.onEvent(physicUpdateEvent, payload => this.physicUpdate(payload))
    this.onEvent(movingEvent, payload => this.moveCharacter(payload))
    this.onEvent(shotActionEvent, payload => this.shotCharacter(payload))
    this.onEvent(destroyEvent, payload => this.destroy(payload))
  }

  addNewCharacter({ state: playerUid }) {
    const newCharacter = new Character(playerUid)
    this._characters.set(newCharacter.uuid, newCharacter)

    if(playerUid)
      this._players.set(playerUid, newCharacter.uuid)

    this.send(createHPEvent,  { state:  { 
      uuid: newCharacter.uuid,
      hp: 50, 
      damage: 100, 
      isApplyDamage: true
    }})
    this.send(spawnEvent, { state: { uuid: newCharacter.uuid } })
  }

  deleteCharactersByPlayer({ state: playerUid }) {
    const characterUuid = this._players.get(playerUid)
    this._players.delete(playerUid)
    this.deleteCharacter(characterUuid)
  }

  destroy({ state: uuid }) {
    if(this._characters.has(uuid)) {
      const playerUid = this._characters.get(uuid).playerUid
      this.deleteCharacter(uuid)
      this.addNewCharacter({ state: playerUid })
    }
  }

  deleteCharacter(uuid) {
    this._characters.delete(uuid)
    this.send(deleteHPEvent, { state: uuid })
    this.send(removeDynamicObject, { state: uuid })
  }

  spawnCharacter({ characterUuid, position }) {
    const characterShape = this._characters.get(characterUuid).spawn({ position }).serialize()

    console.log("Created", characterUuid)
    this.send(createDynamicObject, {
      state: characterShape
    })
  }

  moveCharacter({ state: { playerUuid, direct } }) {
    const characterUuid = this._players.get(playerUuid)
    const character = this._characters.get(characterUuid)

    character.changeDirection(direct)

    this.send(updateDynamicObject, {
      state: character.serialize()
    })
  }

  shotCharacter({ state: { playerUuid, direct } }) {
    const characterUuid = this._players.get(playerUuid)
    const character = this._characters.get(characterUuid)

    this.send(spwanBulletEvent, {
      state: {
        direct,
        position: { 
          x: character.position.x + character.box.width,
          y: character.position.y
        }
      }
    })
  }

  physicUpdate({ state: positions }) {
    const characters = []
    
    for (const [uuid, character] of this._characters) {
      if(character.isSpawned()) {
        character.position = positions[uuid]
        characters.push(character.serialize())
      }
    }

    this.send(updateEvent, {
      state: characters
    })
  }
}

const CREATED = "Created"
const STAND = "Stay"
const WALK = "Walk"

class Character {
  constructor(playerUid = null) {
    this.uuid = genUuid()
    this.playerUid = playerUid
    this.speed = 0
    this.velocity = { x: 0, y: 0 }
    this.box = {
      width: 100,
      height: 340
    }
    this._state = CREATED

    this._groupCollision = "Characters"
  }

  spawn({ position: { x, y } }) {
    if(this.isSpawned())
      return
  
    this.changeState(STAND)
    this.speed = 500
    this.position = { x, y }

    return this
  }

  changeDirection(direct) {
    if(!this.isSpawned())
      return

    this.velocity = { 
      x: direct.x * this.speed, 
      y: direct.y * this.speed
    }

    if(this.velocity.x === 0 && this.velocity.y === 0)
      this.stop()
    else
      this.walking()
  }

  walking() {
    if(this._state !== WALK)
      this.changeState(WALK)
  }

  stop() {
    if(this._state !== STAND)
      this.changeState(STAND)
  }

  changeState(state) {
    this._state = state
  }

  isSpawned() {
    return this._state === STAND || this._state === WALK
  }

  serialize() {
    const { width, height } = this.box
    const { x, y } = this.position
    return {
      uuid: this.uuid,
      playerUuid: this.playerUid,
      shape: "Box",
      box: { width, height },
      position: { x, y },
      velocity: {
        x: this.velocity.x,
        y: this.velocity.y
      },
      groupCollision: this._groupCollision
    }
  }
}

module.exports = { CharactersManager }