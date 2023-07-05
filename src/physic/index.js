const { Member, events: { time } } = require('@ellementul/united-events-environment')
const runEvent = require("../events/run-world")
const stopEvent = require("../events/pause-world")
const createDynamicObject = require("../events/create-dynamic-object")
const updateDynamicObject = require("../events/update-dynamic-object")
const updateEvent = require("../events/update-physic")

const PAUSE = Symbol("Pause")
const RUNNING = Symbol("Running")
class Physic extends Member {
  constructor() {
    super()

    this._state = PAUSE
    this.timer = new Timer

    this._dynamicObjects = new Map
    
    this.onEvent(runEvent, () => this.run())
    this.onEvent(stopEvent, () => this.stop())
    this.onEvent(createDynamicObject, payload => this.createDynamic(payload))
    this.onEvent(updateDynamicObject, payload => this.updateDynamic(payload))
    this.onEvent(time, () => this.step())
  }

  addTiles(){}

  run() {
    this._state = RUNNING
    this.timer.run()
  }

  stop() {
    this._state = PAUSE
  }

  createDynamic({ state: newObject }) {
    this._dynamicObjects.set(newObject.uuid, {
      position: {
        x: newObject.position.x,
        y: newObject.position.y
      },
      velocity: {
        x: newObject.velocity.x,
        y: newObject.velocity.y
      }
    })
  }

  updateDynamic({ state: object }) {
    const physicObject = this._dynamicObjects.get(object.uuid)
    physicObject.velocity = {
      x: object.velocity.x,
      y: object.velocity.y
    }
  }

  step() {
    if(this._state != RUNNING) return
    this.timer.step()

    this.updatePositions()
    this.sendUpdated()
  }

  sendUpdated() {
    const objectsPositions = {}

    for (const [uuid, { position }] of this._dynamicObjects) {
      objectsPositions[uuid] = {
        x: position.x,
        y: position.y
      }
    }

    this.send(updateEvent, { state: objectsPositions })
  }

  updatePositions() {
    for (const [uuid, object] of this._dynamicObjects) {
      this.updatePosition(object)
    }
  }

  updatePosition({ position, velocity }) {
    position.x += velocity.x * this.timer.delta
    position.y += velocity.y * this.timer.delta
  }
}

class Timer {
  constructor() {
    this._time = null
    this._delta = 0
  }
  
  run() {
    this._time = Date.now()
    this._delta = 0
  }

  step () {
    const newTime = Date.now()
    this._delta = newTime - this._time
    this._time = newTime
  }

  get delta () {
    return this._delta / 1000
  }
}

module.exports = { Physic }