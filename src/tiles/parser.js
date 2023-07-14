const { Tileset } = require('./tileset')

class Parser {

  constructor() {
    this.tilesets = [null]
    this.grounds = []
    this.walls = []
  }

  parsing(tileMap) {
    this.getTilesets(tileMap.tilesets)

    tileMap.layers
    .filter(layer => layer.type == "background")
    .forEach(layer => this.getGrounds(layer))

    tileMap.layers
    .filter(layer => layer.type == "walls")
    .forEach(layer => this.getWalls(layer))

    return this
  }

  getTilesets(tilesets) {
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

  getTilesFromTilesets(tilesetsIds) {
    return tilesetsIds.reduce((tiles, tilesetId) => tiles.concat(this.tilesets[tilesetId].tiles), [])
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
    wallsHp = {},
    spawns = []
  }) {

    if(tilesIds.length !== rows * columns)
      throw new TypeError("Inccorect number tiles in layer!")

    const tiles = this.getTilesFromTilesets(tilesetsIds)
    const spawnsIds = []
    if(Array.isArray(spawns)) {
      spawnsIds.push(...spawns.map(spawn => spawn.tileId))
    }
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        const tileId = tilesIds[r*columns + c]

        if(tileId >>> 29 != 0)
          throw new TypeError("Tile has flip or turn!")

        if(tileId == 0)
          continue

        const tile = tiles[tileId].copy()

        if(wallsHp[tileId])
          tile.hp = walls[tileId]
        
        tile.isApplyDamage = !!(wallsHp[tileId])

        if(spawnsIds.includes(tileId))
          tile.isSpawn = true

        tile.type = type
        tile.position = {
          row: r,
          column: c
        }

        this.walls.push(tile)
      }
    }
  }
}

module.exports = { Parser }