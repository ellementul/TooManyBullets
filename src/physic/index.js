const { Member } = require('@ellementul/united-events-environment')
const { events: { time } } = require('@ellementul/uee-timeticker')
const runEvent = require("../events/run-world")
const stopEvent = require("../events/pause-world")
const updateEvent = require("../events/update-physic")

const PAUSE = Symbol("Pause")
const RUNNING = Symbol("Running")
class Physic extends Member {
  constructor() {
    super()

    this._players = new Map

    this._state = PAUSE
    this.onEvent(runEvent, () => this.run())
    this.onEvent(stopEvent, () => this.stop())
    this.onEvent(time, () => this.step())
  }

  addTiles(){}

  run() {
    this._state = RUNNING
  }

  stop() {
    this._state = PAUSE
  }

  step() {
    if(this._state != RUNNING) return

    this.send(updateEvent)
  }
}

module.exports = { Physic }