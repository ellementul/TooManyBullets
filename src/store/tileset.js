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

    for (let row = 0; row < height; row++) {
      for (let column = 0; column < width; column++) {
        const newTile = new Tile({ 
          tileset: this, 
          tilesetRect: {
            tHeight,
            tWidth,
            row,
            column
          }
        })

        this.tiles.push(newTile)
      }
    }
  }
}

module.exports = { Tileset }