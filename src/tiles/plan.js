const { Types } = require('@ellementul/united-events-environment')
const genUuid = Types.UUID.Def().rand

class Plan {
  constructor() {
    this._size = 0
    this._lists = {}
  }

  get size() {
    return this._size
  }

  add(tile) {
    const { row, column} = tile.position

    if(!this._lists[row])
      this._lists[row] = {}

    if(!this._lists[row][column]) {
      this._lists[row][column] = tile
      this._size++
    }
  }

  get({ row, column }) {
    if(!this._lists[row])
      this._lists[row] = []

    if(this._lists[row][column])
      return this._lists[row][column]
    else
      return { position: { row, column } }
  }

  has({ row, column }) {
    return this._lists[row] && this._lists[row][column]
  }

  getNeighbours({ row, column }) {
    return {
      right:  this.get({ row: row,   column: column + 1 }),
      bottom: this.get({ row: row+1, column: column }),
      left:   this.get({ row: row,   column: column - 1 }),
      top:    this.get({ row: row-1, column: column }),
    }
  }

  toArray() {
    const array = []
    for (const row in this._lists) {
      for (const column in this._lists[row]) {
        array.push(this._lists[row][column])
      }
    }

    return array
  }

  delete({ row, column }) {
    if(!this._lists[row])
      return

    if(this._lists[row][column]) {
      const tile = this._lists[row][column]
      delete this._lists[row][column]
      this._size--
      return tile
    }
  }

  clear() {
    this._size = 0
    this._lists = {}
  }
}

class PlanWithBorder extends Plan {
  constructor() {
    super()

    this.cells = new Plan
    this.cellsOut = new Plan
    this.addedCellsOut = new Plan
    this.deletedCellsOut = new Plan
  }

  add(tile) {
    super.add(tile)

    this.delCellOut(tile.position)
      
    const neighbours = this.getNeighbours(tile.position)

    let isFull = true
    for (const direct in neighbours) {
      const { uuid, position } = neighbours[direct]
      if(uuid) {
        this.checkFullNeighbour(position)
      }
      else {
        isFull = false
        this.addCellOut(position)
      }
    }

    if(!isFull)
      this.addCell(tile.position)
  }

  addCell(position) {
    this.cells.add({ position })
  }

  delCell(position) {
    this.cells.delete(position)
  }

  addCellOut(position) {
    if(this.cellsOut.has(position))
      return

    const newCell = { uuid: genUuid(), position }
    this.cellsOut.add(newCell)

    if(this.deletedCellsOut.has(position))
      this.deletedCellsOut.delete(position)
    else
      this.addedCellsOut.add(newCell)
  }


  delCellOut(position) {
    if(!this.cellsOut.has(position))
      return

    const cell = this.cellsOut.get(position)
    this.cellsOut.delete(position)

    if(this.addedCellsOut.has(position))
      this.addedCellsOut.delete(position)
    else
      this.deletedCellsOut.add(cell)
  }

  getCellsOut() {
    return {
      added: this.addedCellsOut.toArray(),
      deleted: this.deletedCellsOut.toArray()
    }
  }

  clearCellsOut() {
    this.addedCellsOut = new Plan
    this.deletedCellsOut = new Plan
  }

  checkFullNeighbour(position) {
    if(!this.cells.has(position))
      return

    if(this.checkFull(position))
      this.delCell(position)
  }

  checkFull(position) {
    const neighbours = this.getNeighbours(position)

    let isFull = true
    for (const direct in neighbours) {
      if(!neighbours[direct].uuid)
        isFull = false
    }

    return isFull
  }
}

module.exports = { Plan, PlanWithBorder }