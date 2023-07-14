const { Types } = require('@ellementul/united-events-environment')
const genUuid = Types.UUID.Def().rand

const CHUNK_LIMIT = 256

class ChunksList extends Map {
  constructor(type) {
    super()

    this.type = type
    this.tileSize = { width: 360, height: 360 }

    this.plan = new Plan

    this.current = new Chunk
    this.set(this.current.uuid, this.current)
  }

  add(tile) {
    this.getEmptyChunck().add(tile)
    this.plan.add(tile)
  }

  delete(uuid, chunkUuid) {
    const chunk = this.get(chunkUuid)
    const { position } = chunk.get(uuid)
    chunk.delete(uuid)
    return this.plan.delete(position)
  }

  getTileByUuid(uuid) {
    for (const [_, chunk] of this) {
      if(chunk.has(uuid))
        return chunk.get(uuid)
    }
  }

  getEmptyChunck() {
    if(this.current.size < CHUNK_LIMIT)
      return this.current

    const emptyChunk = new Chunk
    for (const [uuid, chunk] of this) {
      if(chunk.size < emptyChunk.size || (emptyChunk.size === 0 && chunk.size < CHUNK_LIMIT))
        emptyChunk = chunk
    }

    this.current = emptyChunk

    if(emptyChunk.size === 0)
      this.set(emptyChunk.uuid, emptyChunk)
  }

  toDrawLayers() {
    const layers = []
    for (const [uuid, chunk] of this) {
      layers.push({
        uuid: uuid,
        type: this.type,
        tileSize: this.tileSize,
        tiles: chunk.toDrawTiles()
      })
    }

    return layers
  }
}

class Plan extends Array {
  add(tile) {
    const { row, column} = tile.position

    if(!this[row])
      this[row] = []

    if(!this[row][column])
      this[row][column] = tile
  }

  delete({ row, column }) {
    if(!this[row])
      return

    if(this[row][column]) {
      const tile = this[row][column]
      delete this[row][column]
      return tile
    }
  }
}

class Chunk extends Map {
  constructor() {
    super()

    this.uuid = genUuid()
  }

  add(tile) {
    tile.chunkUuid = this.uuid
    super.set(tile.uuid, tile)
  }

  toDrawTiles() {
    const tiles = []
    for(const [uuid, tile] of this) {
      tiles.push({
        uuid: tile.uuid,
        texture: tile.texture,
        position: { ...tile.position },
        frame: { ...tile.tilesetRect },
        isSpawn: tile.isSpawn
      })
    }

    return tiles
  }
}

module.exports = { ChunksList }