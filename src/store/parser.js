const { Tileset } = require('./tileset')

class Parser {

  constructor() {
    this.tilesets = [null]
    this.grounds = []
    this.walls = []
  }

  parsing(tileMap) {
    this.getTilesets(tileMap.tilesets)

    this.tileSize = { ...tileMap.tileSize }

    tileMap.layers
    .filter(layer => layer.type == "ground")
    .forEach(layer => this.getGrounds(layer))

    tileMap.layers
    .filter(layer => layer.type == "walls")
    .forEach(layer => this.getWalls(layer))

    return {
      tileSize: this.tileSize,
      grounds: this.grounds,
      walls: this.walls
    }
  }

  getTilesets(tilesets) {
    tilesets.forEach(({
      tilesetUid,
      tileSize,
      size,
      texture,
      extraTiles
    }) => {
      const tileset = new Tileset({
        tilesetUid,
        tileSize,
        size,
        texture,
        extraTiles
      })
      this.tilesets[tileset.uid] = tileset
    });
  }

  getTilesFromTilesets(tilesetsIds) {
    return tilesetsIds.reduce((tiles, tilesetId) => tiles.concat(this.tilesets[tilesetId].tiles), [null])
  }

  getGrounds({
    type,
    tiles: tilesIds,
    tilesets: tilesetsIds,
    size: {
      height: rows,
      width: columns
    },
  }) {

    if(tilesIds.length !== rows * columns)
      throw new TypeError("Inccorect number tiles in layer!")

    const tiles = this.getTilesFromTilesets(tilesetsIds)
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        const tileId = tilesIds[r*columns + c]

        if(tileId >>> 29 != 0)
          throw new TypeError("Tile has flip or turn!")

        if(tileId == 0)
          continue

        if(!tiles[tileId])
          throw new TypeError(`TileId in Ground is undefined! TileId: ${tileId}`)

        const tile = tiles[tileId].copy()

        tile.type = type
        tile.position = {
          row: r,
          column: c
        }

        this.grounds.push(tile)
      }
    }
  }

  getWalls({
    type,
    tiles: tilesIds,
    tilesets: tilesetsIds,
    size: {
      height: rows,
      width: columns
    },
    walls = [],
    spawns = []
  }) {

    if(tilesIds.length !== rows * columns)
      throw new TypeError("Inccorect number tiles in layer!")

    const tiles = this.getTilesFromTilesets(tilesetsIds)
    
    if(Array.isArray(spawns))
      spawns = this.parsingList(spawns)
      
    if(Array.isArray(walls))
      walls = this.parsingList(walls)
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        const tileId = tilesIds[r*columns + c]

        const tile = this.parsingWall({ 
          tileId, 
          type,
          position: {
            row: r,
            column: c
          },
          tiles, 
          walls, 
          spawns
        })

        

        if(tile)
          this.walls.push(tile)
      }
    }
  }

  parsingWall({ tileId, type, tiles, walls, spawns, position}) {
    if(tileId >>> 29 != 0)
          throw new TypeError("Tile has flip or turn!")

    if(tileId == 0)
      return

    if(!tiles[tileId])
      throw new TypeError(`TileId in Walls is undefined! TileId: ${tileId}`)

    const tile = tiles[tileId].copy()
    tile.type = type
    tile.position = position

    if(walls.has(tileId))
      tile.hp = walls.get(tileId).hp || 1
    
    tile.isApplyDamage = !!(walls.has(tileId))

    if(spawns.has(tileId))
      tile.isSpawn = true

    return tile
  }

  parsingList(array) {
    const map = new Map
    array.forEach(tile => map.set(tile.tileId, tile))

    return map
  }
}

module.exports = { Parser }