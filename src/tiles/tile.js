const { Types } = require('@ellementul/united-events-environment')
const genUuid = Types.UUID.Def().rand

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
      texture: this.tileset.texture,
      tilesetRect: {
        height: this.tilesetRect.height,
        width: this.tilesetRect.width,
        x: this.tilesetRect.x,
        y: this.tilesetRect.y,
      },
      isExtra: this.isExtra,
      bottomView: this.bottomView
    }
  }
}

module.exports = { Tile }