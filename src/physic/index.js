const { Member, events: { time } } = require('@ellementul/united-events-environment')
const { System } = require("detect-collisions");

const runEvent = require("../events/run-world")
const stopEvent = require("../events/pause-world")
const createDynamicObject = require("../events/objects/create-dynamic-object")
const updateDynamicObject = require("../events/objects/update-dynamic-object")
const createWallsEvent = require("../events/objects/create-walls-object")
const updateEvent = require("../events/objects/update-physic")

const PAUSE = Symbol("Pause")
const RUNNING = Symbol("Running")
class Physic extends Member {
  constructor() {
    super()

    this._state = PAUSE
    this.timer = new Timer

    this._dynamicObjects = new Map
    this._staticObjects = new Map

    this.groupsCollisions = new Collision
    this.collisionSystem = new System
    
    this.onEvent(runEvent, () => this.run())
    this.onEvent(stopEvent, () => this.stop())
    this.onEvent(createDynamicObject, payload => this.createDynamic(payload))
    this.onEvent(updateDynamicObject, payload => this.updateDynamic(payload))
    this.onEvent(createWallsEvent, payload => this.createWall(payload))
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
    if(newObject.shape === "Box")
      this.createDynamicBox(newObject)
    
  }

  createDynamicBox({ uuid, position, box: { width, height }, velocity, groupCollision }) {
    const options = { isStatic: false }
    const box = this.collisionSystem.createBox(position, width, height, options)
    box.velocity = velocity
    box.groupCollision = groupCollision
    
    this._dynamicObjects.set(uuid, box)
  }

  updateDynamic({ state: object }) {
    const physicObject = this._dynamicObjects.get(object.uuid)
    physicObject.velocity = {
      x: object.velocity.x,
      y: object.velocity.y
    }
  }

  createWall({ state: {
    uuid,
    position: { row, column },
    tileSize
  }}) {
    const position = {
      x: column * tileSize.width,
      y: row * tileSize.height,
    }
    const width = tileSize.width
    const height = tileSize.height
    const options = { isStatic: true }

    const wall = this.collisionSystem.createBox(position, width, height, options)
    wall.groupCollision = WALLS

    this._staticObjects.set(uuid, wall)
  }

  step() {
    if(this._state != RUNNING) return
    this.timer.step()

    this.updatePositions()
    this.checkCollisions()
    this.sendUpdated()
  }

  checkCollisions() {
    this.collisionSystem.checkAll(({ a, b, overlapV }) => {
      if(this.groupsCollisions.isRebound(a.groupCollision, b.groupCollision))
        this.resolveCollision({ a, b, overlapV })
    })
  }

  resolveCollision({ a, b, overlapV }) {
    if(!a.isStatic)
      a.setPosition(
        a.x - overlapV.x,
        a.y - overlapV.y
      )
  }

  sendUpdated() {
    const objectsPositions = {}

    for (const [uuid, object] of this._dynamicObjects) {
      objectsPositions[uuid] = {
        x: object.x,
        y: object.y
      }
    }

    this.send(updateEvent, { state: objectsPositions })
  }

  updatePositions() {
    for (const [uuid, object] of this._dynamicObjects) {
      this.updatePosition(object)
    }
  }

  updatePosition(object) {
    object.setPosition(
      object.x + object.velocity.x * this.timer.delta,
      object.y + object.velocity.y * this.timer.delta
    )
  }
}

const NONE = "None"
const TRRIGER = "Overlap"
const REBOUND = "Rebound"

const WALLS = "Walls"
const CHARACTERS = "Characters"

class Collision {
  constructor() {
    const walls = new Map([
      [WALLS, TRRIGER],
      [CHARACTERS, REBOUND]
    ])
    const characters = new Map([
      [WALLS, REBOUND],
      [CHARACTERS, NONE]
    ])

    this._collisionsTypes = new Map([
      [WALLS, walls],
      [CHARACTERS, characters]
    ]) 
  }

  isTrigger(typeA, typeB) {
    return this._collisionsTypes.get(typeA).get(typeB) === TRRIGER
  }

  isRebound(typeA, typeB) {
    return this._collisionsTypes.get(typeA).get(typeB) === REBOUND
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