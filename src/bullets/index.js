const { Member, Types } = require('@ellementul/united-events-environment')
const genUuid = Types.UUID.Def().rand

const spwanEvent = require("../events/objects/spawn-bullet")
const createDynamicObject = require("../events/objects/create-dynamic-object")
const removeDynamicObject = require("../events/objects/remove-dynamic-object")
const createHPEvent = require("../events/objects/create-hp")
const deleteHPEvent = require("../events/objects/remove-hp")
const physicUpdateEvent = require("../events/objects/update-physic")
const updateEvent = require("../events/objects/update-bullets")
const outLimitObjectEvent = require("../events/objects/out-limit-world")
const destroyEvent = require("../events/objects/destroyed-object")


class BulletsManager extends Member {
  constructor() {
    super()

    this._bullets = new Map

    this.onEvent(spwanEvent, payload => this.addNewBullet(payload))
    this.onEvent(physicUpdateEvent, payload => this.physicUpdate(payload))
    this.onEvent(outLimitObjectEvent, payload => this.outLimit(payload))
    this.onEvent(destroyEvent, payload => this.destroy(payload))
  }

  addNewBullet({ state: { direct, position } }) {
    const bullet = new Bullet({ direct, position })
    this._bullets.set(bullet.uuid, bullet)

    this.send(createHPEvent,  { state:  { 
      uuid: bullet.uuid,
      hp: 5, 
      damage: 10, 
      isApplyDamage: true
    }})
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
    if(this._bullets.has(uuid))
      this.delete(uuid)
  }

  destroy({ state: uuid }) {
    if(this._bullets.has(uuid))
      this.delete(uuid)
  }

  delete(uuid) {
    this._bullets.delete(uuid)
    this.send(deleteHPEvent, { state: uuid })
    this.send(removeDynamicObject, { state: uuid })
  }
}

class Bullet {
  constructor({ direct, position }) {
    this.uuid = genUuid()
    this.box = { 
      width: 128, 
      height: 128 
    }

    const offsetBullet = {
      x:  Math.abs(direct.x) > Math.abs(direct.y) ? Math.sign(direct.x) : direct.x,
      y:  Math.abs(direct.y) > Math.abs(direct.x) ? Math.sign(direct.y) : direct.y,
    }

    this.position = {
      x: position.x + ((offsetBullet.x - 1) / 2) * this.box.width,
      y: position.y + ((offsetBullet.y - 1) / 2) * this.box.height
    }
    this.speed = 800
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
      box: this.box,
      position: this.position,
      velocity: this.velocity,
      groupCollision: this._groupCollision
    }
  }
}

module.exports = { BulletsManager }