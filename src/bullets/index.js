const { Member, Types } = require('@ellementul/united-events-environment')
const genUuid = Types.UUID.Def().rand

const spwanEvent = require("../events/objects/spawn-bullet")
const createDynamicObject = require("../events/objects/create-dynamic-object")
const removeDynamicObject = require("../events/objects/remove-dynamic-object")
const physicUpdateEvent = require("../events/objects/update-physic")
const updateEvent = require("../events/objects/update-bullets")
const outLimitObjectEvent = require("../events/objects/out-limit-world")


class BulletsManager extends Member {
  constructor() {
    super()

    this._bullets = new Map

    this.onEvent(spwanEvent, payload => this.addNewBullet(payload))
    this.onEvent(physicUpdateEvent, payload => this.physicUpdate(payload))
    this.onEvent(outLimitObjectEvent, payload => this.outLimit(payload))
  }

  addNewBullet({ state: { direct, position } }) {
    const bullet = new Bullet({ direct, position })
    this._bullets.set(bullet.uuid, bullet)

    this.send(createDynamicObject, {
      state: bullet.serialize()
    })
  }

  physicUpdate({ state: positions }) {
    const bullets = []
    
    for (const [uuid, bullet] of this._bullets) {
      bullet.position = positions[uuid]
      bullets.push(bullet.serialize())
    }

    this.send(updateEvent, {
      state: bullets
    })
  }

  outLimit({ state: uuid }) {
    this._bullets.delete(uuid)
    this.send(removeDynamicObject, { state: uuid })
  }
}

class Bullet {
  constructor({ direct, position }) {
    this.uuid = genUuid()
    this.position = { ...position }
    this.speed = 750
    this.velocity = {
      x: direct.x * this.speed,
      y: direct.y * this.speed
    }
    this._groupCollision = "Bullets"
  }

  serialize() {
    return {
      uuid: this.uuid,
      shape: "Box",
      box: { 
        width: 128, 
        height: 128 
      },
      position: this.position,
      velocity: this.velocity,
      groupCollision: this._groupCollision
    }
  }
}

module.exports = { BulletsManager }