const { Member, Types } = require('@ellementul/united-events-environment')
const genUuid = Types.UUID.Def().rand

const loadEvent = require("../events/load-data")
const readyEvent = require("../events/ready-system")
const clearDataEvent = require("../events/clear-data")
const clearedEvent = require("../events/cleared-system")


const updatePlayersList = require("../events/players/update-players-list")

const freeSpawnsEvent = require("../events/objects/free-spawns")
const spawnEvent = require("../events/objects/spawn-character")
const spawnedEvent = require("../events/objects/ready-spawned")

const createDynamicObject = require("../events/objects/create-dynamic-object")
const updateDynamicObject = require("../events/objects/update-dynamic-object")
const removeDynamicObject = require("../events/objects/remove-dynamic-object")

const createHPEvent = require("../events/objects/create-hp")
const deleteHPEvent = require("../events/objects/remove-hp")
const killedEvent = require("../events/objects/destroyed-object")

const physicUpdateEvent = require("../events/objects/update-physic")
const updateObjectsTilesCoordinatesEvent = require("../events/objects/update-objects-tiles-coordintes")
const updateEvent = require("../events/objects/update-characters")
const updateKillsEvent = require("../events/players/update-kills-count")

const movingEvent = require("../events/players/moving-direct-change")
const shotDirectChangeEvent = require("../events/players/shotting-direct-change")
const shotActionEvent = require("../events/players/shot-action")

const spwanBulletEvent = require("../events/objects/spawn-bullet")


const INIT = Symbol()
const LOADING = Symbol()
const LOADED = Symbol()
const CLEARING = Symbol()

class CharactersManager extends Member {
  constructor() {
    super()

    this._characters = new Map
    this._players = new Map
    this.killCount = 0

    this.state = INIT

    this.onEvent(loadEvent, payload => this.load(payload))
    this.onEvent(clearDataEvent, () => this.clear())

    this.onEvent(updatePlayersList, payload => this.updatePlayers(payload))

    this.onEvent(freeSpawnsEvent, payload => this.freeSpawns(payload))
    this.onEvent(spawnedEvent, payload => this.spawnCharacter(payload))
    

    this.onEvent(physicUpdateEvent, payload => this.physicUpdate(payload))
    this.onEvent(updateObjectsTilesCoordinatesEvent, payload => this.updateTilesCoordinates(payload))

    this.onEvent(movingEvent, payload => this.moveCharacter(payload))
    this.onEvent(shotDirectChangeEvent, payload => this.setShottingDirect(payload))
    this.onEvent(shotActionEvent, payload => this.shotCharacter(payload))

    this.onEvent(killedEvent, payload => this.killed(payload))
  }

  load({ resources: { characters } }) {
    if(this.state != INIT) return
    this.state = LOADING
    this.state = LOADED


    this.send(readyEvent, { state: { system: "Characters" }})
  }

  updatePlayers({ state: playersData }) {
    if(this.state != LOADED) return

    const newPlayersUuids = []
    playersData.forEach(playerData => {
      newPlayersUuids.push(playerData.uuid)

      if(!this._players.has(playerData.uuid))
        this.addNewCharacter(playerData.uuid)
    })

    for (const [playerUuid, _] of this._players) {
      if(!newPlayersUuids.includes(playerUuid))
        this.deleteCharactersByPlayer(playerUuid)
    }
  }

  addNewCharacter(playerUid) {
    const newCharacter = new Character
    this._characters.set(newCharacter.uuid, newCharacter)

    if(playerUid) {
      newCharacter.setOwnPlayer(playerUid)
      this._players.set(playerUid, newCharacter.uuid)
    }

    this.send(createHPEvent,  { state:  { 
      uuid: newCharacter.uuid,
      hp: 50, 
      damage: 100, 
      isApplyDamage: true
    }})
  }

  deleteCharactersByPlayer(playerUid) {
    const characterUuid = this._players.get(playerUid)
    this._players.delete(playerUid)
    this.deleteCharacter(characterUuid)
  }

  killed({ state: uuid }) {
    if(this.state != LOADED) return
    if(!this._characters.has(uuid)) return

    const character = this._characters.get(uuid)
    character.onDestroy((uuid) => {
      this.deleteCharacter(uuid)
      this.addNewCharacter(character.playerUid)
    })

    character.killed()
    this.killCount++
  }

  falling(character) {
    character.onDestroy((uuid) => {
      this.deleteCharacter(uuid)
      this.addNewCharacter(character.playerUid)
    })

    character.falling()
  }

  deleteCharacter(uuid) {
    this._characters.delete(uuid)
    this.send(deleteHPEvent, { state: uuid })
    this.send(removeDynamicObject, { state: uuid })
  }

  clear() {
    if(this.state != LOADED) return
    this.state = CLEARING

    for (const [uuid, _] of this._characters) {
      this.deleteCharacter(uuid)
    }

    this.state = INIT
    this.send(clearedEvent, { state: { system: "Characters" }})
  }

  freeSpawns({ spawns }) {
    if(this.state != LOADED) return

    const spawn = spawns[0]
    if(!spawn)
      return

    const character = this.notSpawnedCharacters()[0]
    if(!character)
      return

    character.waitSpawn(spawn.uuid)

    this.send(spawnEvent, { 
      spawnUuid: spawn.uuid,
      characterUuid: character.uuid 
    })
  }

  spawnCharacter({ characterUuid, position }) {
    if(this.state != LOADED) return

    const characterShape = this._characters.get(characterUuid).spawn({ position }).serialize()

    this.send(createDynamicObject, {
      state: characterShape
    })
  }

  notSpawnedCharacters() {
    const characters = []
    for (const [_, character] of this._characters) {
      if(character.isCreatedForSpawn())
        characters.push(character)
    }

    return characters
  }

  moveCharacter({ playerUuid, state: direct }) {
    if(this.state != LOADED) return

    if(!this._players.has(playerUuid))
      return

    const characterUuid = this._players.get(playerUuid)
    const character = this._characters.get(characterUuid)

    if(!character || !character.isSpawned())
      return

    character.changeDirection(direct)

    this.send(updateDynamicObject, {
      state: character.serialize()
    })
  }

  setShottingDirect({ playerUuid, state: direct }) {
    if(this.state != LOADED) return

    if(!this._players.has(playerUuid))
      return

    const characterUuid = this._players.get(playerUuid)
    const character = this._characters.get(characterUuid)

    if(!character || !character.isSpawned())
      return

    character.changeShotDirect(direct)
  }

  shotCharacter({ playerUuid, state: isShotting }) {
    if(this.state != LOADED) return

    if(!this._players.has(playerUuid))
      return

    const characterUuid = this._players.get(playerUuid)
    const character = this._characters.get(characterUuid)

    if(!character || !character.isSpawned())
      return

    if(isShotting)
      character.setShotting(() => {
        this.send(spwanBulletEvent, {
          state: {
            parentUuid: characterUuid,
            ...character.getSpawnBulletPostitonAndDirect()
          }
        })
      })
    else
      character.delShotting()
  }

  physicUpdate({ state: positions }) {
    if(this.state != LOADED) return

    const characters = []
    
    for (const [uuid, character] of this._characters) {
      if(character.isSpawned())
        character.position = positions[uuid]

      characters.push(character.draw())
    }

    this.send(updateEvent, {
      state: characters
    })

    this.send(updateKillsEvent, {
      state: this.killCount
    })
  }

  updateTilesCoordinates({ state: tilesPosition }) {
    if(this.state != LOADED) return

    for (const uuid in tilesPosition) {

      if(!this._characters.has(uuid)) continue

      const character = this._characters.get(uuid)

      if(!character.isSpawned()) continue

      if(!tilesPosition[uuid].isOnGround)
        this.falling(character)
    }
  }
}

const HIDDEN = "Hidden"
const STAND = "Stay"
const KILLED = "Killed"
const FALLING = "Falling"

const CREATED = {
  stateKey: Symbol(),
  animState: HIDDEN
}

const WAIT_SPAWN = {
  stateKey: Symbol(),
  animState: HIDDEN
}

const SPAWNED = {
  stateKey: Symbol(),
  animState: STAND
}

const DESTROYED = { 
  stateKey: Symbol(),
  animState: KILLED
}

const FALLEN = { 
  stateKey: Symbol(),
  animState: FALLING
}

class Character {
  constructor() {
    this.uuid = genUuid()
    this.playerUid = null
    this.speed = 0
    this.position = { x: 0, y: 0 }
    this.velocity = { x: 0, y: 0 }
    this.shotDirect = { x: 1, y: 0 }
    this.isShotting = false
    this.box = {
      width: 115,
      height: 340
    }
    this.pivot = {
      x: 50,
      y: 340
    }
    this.setState(CREATED)
    this.spawnUuid = null

    this._groupCollision = "Characters"
  }

  setOwnPlayer(playerUid) {
    this.playerUid = playerUid
  }

  onDestroy(callback) {
    this.destroyCallback = callback
  }

  setState(state) {
    if(this._state == state)
      return

    if(state === WAIT_SPAWN && this._state !== CREATED)
      return

    if(state === SPAWNED && this._state !== WAIT_SPAWN)
      return

    if(state === DESTROYED && this._state !== SPAWNED)
      return
      
    this._state = state
    return true
  }

  setShotting(cb) {
    if(this.isShotting) return

    this.isShotting = true
    this.shottingTimer = setInterval(cb, 500)
    cb() //first shot
  }

  delShotting() {
    if(!this.isShotting) return

    this.isShotting = false
    clearInterval(this.shottingTimer)
  }
  

  isCreatedForSpawn() {
    return this._state.stateKey === CREATED.stateKey
  }

  isWaitSpawn() {
    return this._state.stateKey === WAIT_SPAWN.stateKey
  }

  isSpawned() {
    return this._state.stateKey === SPAWNED.stateKey
  }

  waitSpawn(spawnUuid) {
    if(!this.setState(WAIT_SPAWN))
      return

    this.spawnUuid = spawnUuid
  }

  spawn({ position: { x, y } }) {
    if(!this.setState(SPAWNED))
      return
    
    this.speed = 1400
    this.position = { x, y }

    return this
  }

  killed() {
    if(!this.setState(DESTROYED))
      return

    if(this.destroyCallback) 
      setTimeout(() => {
        this.destroyCallback(this.uuid)
      }, 3000)

    this.delShotting()
  }

  falling() {
    if(!this.setState(FALLEN))
      return

    if(this.destroyCallback) 
      setTimeout(() => {
        this.destroyCallback(this.uuid)
      }, 3000)

    this.delShotting()
  }

  getCenterPosition() {
    return {
      x: this.position.x + this.box.width / 2,
      y: this.position.y + this.box.height / 2
    }
  }

  getSpawnBulletPostitonAndDirect() {
    const characterCenter = this.getCenterPosition()
    
    const turn = (point, direct) => ({
      x: point.x * direct.x - point.y * direct.y * Math.sign(direct.x),
      y: point.x * direct.y + point.y * direct.x * Math.sign(direct.x)
    })

    const bulletShift = turn({
      x: 100,
      y: -25
    }, this.shotDirect)

    const gunShift = {
      x: -25,
      y: 25
    }

    return {
      direct: this.shotDirect,
      position: {
        x: characterCenter.x + bulletShift.x + gunShift.x * Math.sign(this.shotDirect.x),
        y: characterCenter.y + bulletShift.y + gunShift.y
      }
    }
  }

  changeShotDirect(direct) {
    if(!this.isSpawned())
      return

    this.shotDirect = direct
  }

  vectorLength({x, y}) {
    return Math.sqrt(x*x + y*y)
  }

  vectorNormalize({x, y}) {
    if(x === 0 || y === 0)
      return {
        x: Math.sign(x), 
        y: Math.sign(y)
      }

    const length = this.vectorLength({x, y})
    return {
      x: x / length,
      y: y / length,
    }
  }

  changeDirection(direct) {
    if(!this.isSpawned())
      return

    direct = this.vectorNormalize(direct)

    this.velocity = { 
      x: direct.x * this.speed, 
      y: direct.y * this.speed
    }
  }

  serialize() {
    const { width, height } = this.box
    return {
      uuid: this.uuid,
      shape: "Box",
      box: { width, height },
      position: { ...this.position},
      pivot: { ...this.pivot},
      velocity: {
        x: this.velocity.x,
        y: this.velocity.y
      },
      groupCollision: this._groupCollision
    }
  }

  draw() {
    return {
      uuid: this.uuid,
      playerUuid: this.playerUid,
      state: this._state.animState,
      position: this.getCenterPosition(),
      velocity: { ...this.velocity }
    }
  }
}

module.exports = { CharactersManager }