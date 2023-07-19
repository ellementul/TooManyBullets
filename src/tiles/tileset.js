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
    this.extraTiles = extraTiles

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

        this.setExtraTiles(newTile, { row, column }, { tHeight, tWidth })

        this.tiles.push(newTile)
      }
    }
  }

  setExtraTiles(newTile, positionInTileset, { tHeight, tWidth }) {
    if(this.isExtraTile(positionInTileset)) {
      newTile.isExtra = true
      return
    }

    const { bottom } = this.getExtraTilesForTarget(positionInTileset)

    if(bottom)
      newTile.bottomView = new Tile({ 
        tileset: this, 
        tilesetRect: {
          tHeight,
          tWidth,
          row: bottom.row - 1,
          column: bottom.column - 1
        }
      })
  }

  isExtraTile({ row, column }) {
    for (const key in this.extraTiles) {
      const { target, bottom } = this.extraTiles[key]

      if (bottom.row === row && bottom.column === column)
        return true
    }

    return false
  }

  getExtraTilesForTarget({ row, column }) {
    for (const key in this.extraTiles) {
      const { target, bottom } = this.extraTiles[key]

      if (target.row === row && target.column === column)
        return { bottom }
    }

    return {}
  }
}

module.exports = { Tileset }