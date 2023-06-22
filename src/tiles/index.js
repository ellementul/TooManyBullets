const { Member } = require('@ellementul/united-events-environment')

const loadTilesEvent = require("../events/load-tiles")

class Tiles extends Member {
  constructor() {
    super()

    this.tiles = [null]// TODO: Make zero for errors
    this.map = []
    this.onEvent(loadTilesEvent, payload => this.load(payload))
  }

  load({ state: tileMap }) {
    this.loadTiles(tileMap.tilesets)
    this.loadMap(tileMap)
    console.log(this.map)
  }

  loadTiles(tilesets) {
    tilesets.forEach(({
      tilesetUid,
      tileSize,
      size,
      source
    }) => {
      const tileset = new Tileset({
        tilesetUid,
        tileSize,
        size,
        source
      })
      this.tiles = this.tiles.concat(tileset.tiles)
    });
  }

  loadMap(tileMap) {
    tileMap.layers.forEach(layer => {
      this.loadLayer(layer)
    });
  }

  loadLayer({
    tiles,
    position,
    size: {
      height: rows,
      width: columns
    },
    tileSize: {
      height: tHeight,
      width: tWidth
    },
    zIndex
  }) {
    if(tiles.length !== rows * columns)
      throw new TypeError("Inccorect number tiles in layer!")

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        const tile_id = tiles[r*columns + c]
        const tile = this.tiles[tile_id]

        tile.position = {
          offsetLayer: position,
          row: r,
          column: c,
          z: zIndex
        }

        tile.size = {
          height: tile.tilesetRect.height / tHeight,
          width: tile.tilesetRect.width / tWidth,
        }

        if(tile.size.height * tile.size.width != 1)
          throw new TypeError("Right now tile has to be size 1x1!")

        this.setTileOnMap(tile)
      }
    }
  }

  setTileOnMap(tile) {
    const { row, column, z } = tile.position
    if(!Array.isArray(this.map[z]))
      this.map[z] = []

    if(!Array.isArray(this.map[z][row]))
      this.map[z][row] = []

    this.map[z][row][column] = tile
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
    source
  }) {
    this.uid = tilesetUid
    this.tiles = []

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
}

module.exports = { Tiles }