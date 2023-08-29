const { Member } = require('@ellementul/united-events-environment')

const { ChunksList } = require('./chunks-list')

const loadEvent = require("../events/load-data")
const readyEvent = require("../events/ready-system")
const connectedEvent = require("../events/players/connected-player")

const addSpwanEvent = require("../events/objects/add-spawn")
const createWallsEvent = require("../events/objects/create-walls-object")
const removeWallsEvent = require("../events/objects/remove-walls-object")
const physicUpdateEvent = require("../events/objects/update-physic")
const updateObjectsTilesCoordintesEvent = require("../events/objects/update-objects-tiles-coordintes")

const updateWallsCount = require('../events/objects/update-walls-count')
const updatePlatformsCount = require('../events/objects/update-platforms-count')

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

    this.onEvent(connectedEvent, () => this.setFullUpdating())
    this.onEvent(physicUpdateEvent, payload => this.physicUpdated(payload))
    this.onEvent(destroyEvent, payload => this.destroy(payload))

    this.send(readyEvent, { state: { system: "Tiles" }})
  }

  setFullUpdating() {
    this.grounds.setFullUpdate()
    this.walls.setFullUpdate()
  }

  addGround(ground) {
    this.grounds.add(ground)
  }

  addWall(wall) {
    this.walls.add(wall)

    if(wall.isSpawn)
      return this.addSpawn(wall)
    
    const { uuid, isApplyDamage, hp, damage, position } = wall
    this.send(createHPEvent,  { state:  { 
      uuid, 
      hp, 
      damage: damage,
      isApplyDamage
    }})
    
    this.send(createWallsEvent, { state: {
      uuid,
      position: { ...position },
      tileSize: { ...this.walls.tileSize },
      half: wall.half
    }})
  }

  addOutWall({ uuid, position }) {
    this.send(createWallsEvent, { state: {
      uuid,
      position: { ...position },
      tileSize: { ...this.walls.tileSize }
    }})
  }

  addSpawn({ 
    position: {
      column,
      row
    },
    tilesetRect: {
      width,
      height
    },
    spawn
  }) {
    spawn.position = {
      x: column * width,
      y: row * height,
    }
    this.send(addSpwanEvent, { spawn })
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
    // added.forEach(outWall => this.addOutWall(outWall))
    this.grounds.plan.clearCellsOut()
  }

  physicUpdated({ state: objects }) {
    
    this.updateTilesCoordinteObjects(objects)

    this.send(updateEvent, {
      state: this.serialize()
    })

    this.send(updateWallsCount, {
      state: this.walls.size
    })

    this.send(updatePlatformsCount, {
      state: this.grounds.size
    })
  }

  updateTilesCoordinteObjects(objects) {
    const tilesCoordinteObjects = {}
    for (const key in objects) {
      tilesCoordinteObjects[key] = this.getTilesCoordinate(objects[key])
      tilesCoordinteObjects[key].isOnGround = !!this.grounds.plan.get(tilesCoordinteObjects[key]).uuid
    }

    this.send(updateObjectsTilesCoordintesEvent, {
      state: tilesCoordinteObjects
    })
  }

  getTilesCoordinate({ x, y, pivot, vx, vy }) {
    const { height, width } = this.grounds.tileSize
    return {
      row: Math.floor((x + pivot.x - (vx * 0.05 )) / width),
      column: Math.floor((y + pivot.y - (vy * 0.05 )) / height)
    }
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