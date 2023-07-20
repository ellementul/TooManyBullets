const { Tile } = require('./tile')

class Tileset {
  constructor({
    tilesetUid,
    tileSize,
    size,
    texture,
    extraTiles
  }) {
    this.uid = tilesetUid
    this.tiles = []
    this.texture = texture
    this.targets = {}

    this.createTiles(tileSize, size)
  }

  createTiles({ height: tHeight, width: tWidth }, { height, width }) {

    for (let row = 1; row <= height; row++) {
      for (let column = 1; column <= width; column++) {
        const newTile = new Tile({ 
          tileset: this, 
          tilesetRect: {
            tHeight,
            tWidth,
            row: row - 1,
            column: column - 1
          }
        })

        this.tiles.push(newTile)
      }
    }
  }
}

module.exports = { Tileset }