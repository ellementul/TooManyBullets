const { Member, Types } = require('@ellementul/united-events-environment')
const genUuid = Types.UUID.Def().rand

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

    this.tiles = [null]// TODO: Make zero for errors
    this.tilesets = [null]// TODO: Make zero for errors
    this.walls = new Map
    this.map = {}
    this.onEvent(loadTilesEvent, payload => this.load(payload))
  }

  load({ state: tileMap }) {
    this.loadTiles(tileMap.tilesets)
    this.loadMap(tileMap)
    
    this.onEvent(physicUpdateEvent, payload => this.physicUpdated(payload))
    this.onEvent(destroyEvent, payload => this.destroy(payload))
  }

  physicUpdated(payload) {
    this.send(updateEvent, {
      state: this.serialize()
    })
  }

  loadTiles(tilesets) {
    tilesets.forEach(({
      tilesetUid,
      tileSize,
      size,
      texture
    }) => {
      const tileset = new Tileset({
        tilesetUid,
        tileSize,
        size,
        texture
      })
      this.tilesets[tileset.uid] = tileset
    });
  }

  loadMap(tileMap) {
    tileMap.layers.forEach(layer => {
      if(layer.type == "background")
        this.loadGround(layer)

      if(layer.type == "walls")
        this.loadWalls(layer)
    });
  }

  loadGround({
    type,
    tiles: tilesIds,
    tilesets: tilesetsIds,
    position,
    size: {
      height: rows,
      width: columns
    },
    tileSize: {
      height: tHeight,
      width: tWidth
    },
    spawns
  }) {
    const layerUuid = genUuid()

    if(tilesIds.length !== rows * columns)
      throw new TypeError("Inccorect number tiles in layer!")

    const tiles = this.getTilesFromTilesets(tilesetsIds)

    const spawnsIds = []
    if(Array.isArray(spawns)) {
      spawnsIds.push(...spawns.map(spawn => spawn.number))
    }
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        const tileId = tilesIds[r*columns + c]

        if(tileId >>> 29 != 0)
          throw new TypeError("Tilr has flip or turn!")

        if(tileId == 0)
          continue

        const tile = tiles[tileId].copy()

        tile.position = {
          offsetLayer: position,
          row: r,
          column: c
        }

        tile.size = {
          height: tile.tilesetRect.height / tHeight,
          width: tile.tilesetRect.width / tWidth,
        }

        if(tile.size.height * tile.size.width != 1)
          throw new TypeError("Right now tile has to be size 1x1!")


        this.setGroundOnMap(tile, {
          layerUuid,
          type,
          size: {
            height: rows,
            width: columns
          },
          tileSize: {
            height: tHeight,
            width: tWidth
          },
        })
      }
    }
  }

  loadWalls({
    type,
    tiles: tilesIds,
    tilesets: tilesetsIds,
    position,
    size: {
      height: rows,
      width: columns
    },
    tileSize: {
      height: tHeight,
      width: tWidth
    },
    spawns
  }) {
    const layerUuid = genUuid()

    if(tilesIds.length !== rows * columns)
      throw new TypeError("Inccorect number tiles in layer!")

    const tiles = this.getTilesFromTilesets(tilesetsIds)

    const spawnsIds = []
    if(Array.isArray(spawns)) {
      spawnsIds.push(...spawns.map(spawn => spawn.number))
    }
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        const tileId = tilesIds[r*columns + c]

        if(tileId >>> 29 != 0)
          throw new TypeError("Tilr has flip or turn!")

        if(tileId == 0)
          continue

        const tile = tiles[tileId].copy()

        if(spawnsIds.includes(tileId))
          tile.isSpawn = true

        tile.position = {
          offsetLayer: position,
          row: r,
          column: c
        }

        tile.size = {
          height: tile.tilesetRect.height / tHeight,
          width: tile.tilesetRect.width / tWidth,
        }

        if(tile.size.height * tile.size.width != 1)
          throw new TypeError("Right now tile has to be size 1x1!")


        this.setWallOnMap(tile, {
          layerUuid,
          type,
          size: {
            height: rows,
            width: columns
          },
          tileSize: {
            height: tHeight,
            width: tWidth
          },
        })
      }
    }
  }

  getTilesFromTilesets(tilesetsIds) {
    return tilesetsIds.reduce((tiles, tilesetId) => tiles.concat(this.tilesets[tilesetId].tiles), this.tiles)
  }

  setGroundOnMap(tile, { layerUuid, type, size, tileSize }) {
    const { row, column } = tile.position
    if(!this.map[layerUuid])
      this.map[layerUuid] = {
        uuid: layerUuid,
        type,
        tiles: [],
        size,
        tileSize
      }

    const layer = this.map[layerUuid]

    if(!Array.isArray(layer.tiles[row]))
      layer.tiles[row] = []

    layer.tiles[row][column] = tile
  }

  setWallOnMap(tile, { layerUuid, type, size, tileSize }) {

    const { uuid, position: { row, column } } = tile

    if(tile.isSpawn) {
      this.send(addSpwanEvent, { state: {
        position: {
          x: column * tileSize.width,
          y: row * tileSize.height,
        }
      }})
    }
    else {
      this.send(createHPEvent, { state: uuid })
      this.send(createWallsEvent, { state: {
        uuid,
        position: { row, column },
        size,
        tileSize
      }})
    }

    
    if(!this.map[layerUuid])
      this.map[layerUuid] = {
        uuid: layerUuid,
        type,
        tiles: [],
        size,
        tileSize
      }

    const layer = this.map[layerUuid]

    if(!Array.isArray(layer.tiles[row]))
      layer.tiles[row] = []

    layer.tiles[row][column] = tile
    this.walls.set(uuid, {
      layerUuid,
      column,
      row
    })
  }

  destroy({ state: uuid }) {
    if(this.walls.has(uuid))
      this.deleteWall(uuid)
  }
  deleteWall(uuid) {
    const {
      layerUuid,
      column,
      row 
    } = this.walls.get(uuid)

    delete this.map[layerUuid].tiles[row][column]
    this.walls.delete(uuid)
    this.send(deleteHPEvent, { state: uuid })
    this.send(removeWallsEvent, { state: uuid })
  }

  serialize() {
    const tileMap = this.map
    const layers = []

    for (const layerUuid in tileMap) {
      const layer = tileMap[layerUuid]

      const tiles = []
      layer.tiles.forEach(row => row.forEach(tile => {
        if(tile.isSpawn)
          return

        const { row, column, z } = tile.position
        const { height, width, x, y } = tile.tilesetRect
        tiles.push({
          uuid: tile.uuid,
          texture: tile.tileset.texture,
          position: { row, column, z },
          frame: { height, width, x, y },
        })
      }))
      layers.push({
        uuid: layerUuid,
        type: layer.type,
        tiles,
        size: layer.size,
        tileSize: layer.tileSize
      })
    }
    return { layers }
  }
}

  

class Tileset {
  constructor({
    tilesetUid,
    tileSize: {
      height: tHeight,
      width: tWidth
    },
    size: {
      height: rows,
      width: columns
    },
    texture
  }) {
    this.uid = tilesetUid
    this.tiles = []
    this.texture = texture

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        this.tiles.push(new Tile({ 
          tileset: this, 
          tilesetRect: {
            tHeight,
            tWidth,
            row: r,
            column: c
          }
        }))
      }
    }
  }
}

class Tile {
  constructor({ 
    tileset, 
    tilesetRect: {
      tHeight,
      tWidth,
      row,
      column
    }
  }) {
    this.tileset = tileset
    this.tilesetRect = {
      height: tHeight,
      width: tWidth,
      x: column * tWidth,
      y: row * tHeight,
    }
  }

  copy() {
    return {
      uuid: genUuid(),
      tileset: this.tileset,
      tilesetRect: {
        height: this.tilesetRect.height,
        width: this.tilesetRect.width,
        x: this.tilesetRect.x,
        y: this.tilesetRect.y,
      }
    }
  }
}

module.exports = { Tiles }