const { Member, Types } = require('@ellementul/united-events-environment')
const genUuid = Types.UUID.Def().rand

const loadEvent = require("../events/load-data")
const readyEvent = require("../events/ready-system")
const clearedEvent = require("../events/cleared-system")
const clearDataEvent = require("../events/clear-data")

const spwanEvent = require("../events/objects/spawn-bullet")
const createDynamicObject = require("../events/objects/create-dynamic-object")
const removeDynamicObject = require("../events/objects/remove-dynamic-object")
const createHPEvent = require("../events/objects/create-hp")
const deleteHPEvent = require("../events/objects/remove-hp")
const physicUpdateEvent = require("../events/objects/update-physic")
const updateEvent = require("../events/objects/update-bullets")
const outLimitObjectEvent = require("../events/objects/out-limit-world")
const destroyEvent = require("../events/objects/destroyed-object")

const INIT = Symbol()
const LOADING = Symbol()
const LOADED = Symbol()
const CLEARING = Symbol()

class BulletsManager extends Member {
  constructor() {
    super()

    this._bullets = new Map
    this.state = INIT

    this.onEvent(loadEvent, payload => this.load(payload))
    this.onEvent(clearDataEvent, () => this.clear())

    this.onEvent(spwanEvent, payload => this.addNewBullet(payload))
    this.onEvent(physicUpdateEvent, payload => this.physicUpdate(payload))
    this.onEvent(outLimitObjectEvent, payload => this.outLimit(payload))
    this.onEvent(destroyEvent, payload => this.destroy(payload))
  }

  load({ resources: { bullets } }) {
    if(this.state != INIT) return
    this.state = LOADING
    // console.log(bullets)
    this.state = LOADED
    

    this.send(readyEvent, { state: { system: "Bullets" }})
  }

  addNewBullet({ state: { parentUuid, direct, position } }) {
    if(this.state != LOADED) return

    const bullet = new Bullet({ direct, position })
    this._bullets.set(bullet.uuid, bullet)

    this.send(createHPEvent,  { state:  { 
      uuid: bullet.uuid,
      parentUuid: parentUuid,
      hp: 5, 
      damage: 10, 
      isApplyDamage: true
    }})
    this.send(createDynamicObject, {
      state: bullet.serialize()
    })
  }

  physicUpdate({ state: positions }) {
    if(this.state != LOADED) return

    const bullets = []
    
    for (const [uuid, bullet] of this._bullets) {
      bullet.position = positions[uuid]
      bullets.push(bullet.draw())
    }

    this.send(updateEvent, {
      state: bullets
    })
  }

  outLimit({ state: uuid }) {
    if(this.state != LOADED) return

    if(this._bullets.has(uuid))
      this.delete(uuid)
  }

  destroy({ state: uuid }) {
    if(this.state != LOADED) return

    if(this._bullets.has(uuid))
      this.delete(uuid)
  }

  delete(uuid) {
    this._bullets.delete(uuid)
    this.send(deleteHPEvent, { state: uuid })
    this.send(removeDynamicObject, { state: uuid })
  }

  clear() {
    if(this.state != LOADED) return
    this.state = CLEARING

    for (const [uuid, _] of this._bullets) {
      this.delete(uuid)
    }

    this.state = INIT
    this.send(clearedEvent, { state: { system: "Bullets" }})
  }
}

class Bullet {
  constructor({ direct, position }) {
    this.uuid = genUuid()
    this.box = { 
      width: 50, 
      height: 50
    }

    this.position = {
      x: position.x - this.box.width / 2,
      y: position.y - this.box.height / 2
    }
    
    this.speed = 1700
    this.velocity = {
      x: direct.x * this.speed,
      y: direct.y * this.speed
    }
    this._groupCollision = "Bullets"
  }

  getCenterPosition() {
    return {
      x: this.position.x + this.box.width / 2,
      y: this.position.y + this.box.height / 2
    }
  }

  serialize() {
    return {
      uuid: this.uuid,
      shape: "Box",
      box: this.box,
      position: {...this.position},
      velocity: this.velocity,
      groupCollision: this._groupCollision
    }
  }

  draw() {
    return {
      uuid: this.uuid,
      position: this.getCenterPosition(),
      velocity: { ...this.velocity }
    }
  }
}

module.exports = { BulletsManager }