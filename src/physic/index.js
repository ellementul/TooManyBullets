const { Member } = require('@ellementul/united-events-environment')
const { events: { time } } = require('@ellementul/uee-timeticker')

const PAUSE = Symbol("Pause")
const RUNNING = Symbol("Running")
class PlayersManager extends Member {
  constructor() {
    super()

    this._players = new Map

    this._state = PAUSE
    this.onEvent(time, () => this.step())
  }

  addTiles(){}

  run() {
    this._state = RUNNING
  }

  pause() {
    this._state = PAUSE

  }

  step() {
    if(this._state != RUNNING) return

  }
}

module.exports = { PlayersManager }