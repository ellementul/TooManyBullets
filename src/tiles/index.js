const { Member } = require('@ellementul/united-events-environment')

const { ChunksList } = require('./chunks-list')

const loadTilesEvent = require("../events/load-tiles")
const loadEvent = require("../events/load-data")
const readyEvent = require("../events/ready-system")

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

    this.grounds = null
    this.walls = null

    // this.onEvent(loadTilesEvent, payload => this.load(payload))
    this.onEvent(loadEvent, payload => this.load(payload))
  }

  load({ resources: { tileMap: { grounds, walls, tileSize } } }) {
    this.grounds = new ChunksList("ground", tileSize)
    this.walls = new ChunksList("walls", tileSize)

    grounds.forEach(ground => this.addGround(ground))
    this.updateOutWalls()

    walls.forEach(wall => this.addWall(wall))

    this.onEvent(physicUpdateEvent, payload => this.physicUpdated(payload))
    this.onEvent(destroyEvent, payload => this.destroy(payload))

    this.send(readyEvent, { state: { system: "Tiles" }})
  }

  addGround(ground) {
    this.grounds.add(ground)
  }

  addWall(wall) {
    this.walls.add(wall)

    if(wall.isSpawn)
      return this.addSpawn(wall)
    
    const { uuid, isApplyDamage, hp, position } = wall
    this.send(createHPEvent,  { state:  { 
      uuid, 
      hp, 
      damage: 50, 
      isApplyDamage
    }})
    this.send(createWallsEvent, { state: {
      uuid,
      position: { ...position },
      tileSize: { ...this.walls.tileSize }
    }})
  }

  addOutWall({ uuid, position }) {
    this.send(createWallsEvent, { state: {
      uuid,
      position: { ...position },
      tileSize: { ...this.walls.tileSize }
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

  updateOutWalls() {
    const { added } = this.grounds.plan.getCellsOut()
    added.forEach(outWall => this.addOutWall(outWall))
    this.grounds.plan.clearCellsOut()
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