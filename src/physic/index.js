const { Member } = require('@ellementul/united-events-environment')
const { events: { time } } = require('@ellementul/uee-timeticker')
const runEvent = require("../events/run-world")
const stopEvent = require("../events/pause-world")
const createDynamicObject = require("../events/create-dynamic-object")
const updateEvent = require("../events/update-physic")

const PAUSE = Symbol("Pause")
const RUNNING = Symbol("Running")
class Physic extends Member {
  constructor() {
    super()

    this._state = PAUSE

    this._dynamicObjects = new Map
    
    this.onEvent(runEvent, () => this.run())
    this.onEvent(stopEvent, () => this.stop())
    this.onEvent(createDynamicObject, payload => this.createDynamic(payload))
    this.onEvent(time, () => this.step())
  }

  addTiles(){}

  run() {
    this._state = RUNNING
  }

  stop() {
    this._state = PAUSE
  }

  createDynamic({ state: newObject }) {
    this._dynamicObjects.set(newObject.uuid, {
      position: {
        x: newObject.position.x,
        y: newObject.position.y
      }
    })

    // console.log(this._dynamicObjects)
  }

  step() {
    if(this._state != RUNNING) return

    this.send(updateEvent)
  }
}

module.exports = { Physic }