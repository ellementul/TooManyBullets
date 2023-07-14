const { Member } = require('@ellementul/united-events-environment')

const { Parser } = require('./parser')
const { ChunksList } = require('./chunks-list')

const loadTilesEvent = require("../events/load-tiles")
const addSpwanEvent = require("../events/objects/add-spawn")
const createWallsEvent = require("../events/objects/create-walls-object")
const removeWallsEvent = require("../events/objects/remove-walls-object")
const physicUpdateEvent = require("../events/objects/update-physic")
const createHPEvent = require("../events/objects/create-hp")
const deleteHPEvent = require("../events/objects/remove-hp")
const destroyEvent = require("../events/objects/destroyed-object")
const updateEvent = require("../events/objects/update-tiles")

class Tiles extends Member {
  constructor() {
    super()

    this.grounds = new ChunksList("background")
    this.walls = new ChunksList("walls")

    this.onEvent(loadTilesEvent, payload => this.load(payload))
  }

  load({ state: tileMap }) {
    const parser = new Parser
    const { grounds, walls } = parser.parsing(tileMap)
    grounds.forEach(ground => this.addGround(ground))
    walls.forEach(wall => this.addWall(wall))

    this.onEvent(physicUpdateEvent, payload => this.physicUpdated(payload))
    this.onEvent(destroyEvent, payload => this.destroy(payload))
  }

  addGround(ground) {
    this.grounds.add(ground)
  }

  addWall(wall) {
    this.walls.add(wall)

    if(wall.isSpawn)
      return this.addSpawn(wall)
    
    const { uuid, isApplyDamage, hp, position, tilesetRect }= wall
    this.send(createHPEvent,  { state:  { 
      uuid, 
      hp, 
      damage: 50, 
      isApplyDamage
    }})
    this.send(createWallsEvent, { state: {
      uuid,
      position: { ...position },
      tileSize: { ...tilesetRect }
    }})
  }

  addSpawn(spawn) {
    const { 
      position: {
        column,
        row
      },
      tilesetRect: {
        width,
        height
      }
    } = spawn
    this.send(addSpwanEvent, { state: {
      position: {
        x: column * width,
        y: row * height,
      }
    }})
  }


  destroy({ state: uuid }) {
    const wall = this.walls.getTileByUuid(uuid)
    if(wall)
      this.deleteWall(wall)
  }

  deleteWall(wall) {
    const { uuid, chunkUuid } = wall

    this.walls.delete(uuid, chunkUuid)
    this.send(deleteHPEvent, { state: uuid })
    this.send(removeWallsEvent, { state: uuid })
  }

  physicUpdated() {
    this.send(updateEvent, {
      state: this.serialize()
    })
  }

  serialize() {
    const layers = [
      ...this.grounds.toDrawLayers(),
      ...this.walls.toDrawLayers()
    ]

    return { layers }
  }
}

module.exports = { Tiles }