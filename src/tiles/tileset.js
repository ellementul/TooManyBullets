const { Tile } = require('./tile')

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

module.exports = { Tileset }