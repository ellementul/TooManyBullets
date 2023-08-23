const { Member } = require('@ellementul/united-events-environment')

const createEvent = require("../events/objects/create-hp")
const deleteEvent = require("../events/objects/remove-hp")
const destroyEvent = require("../events/objects/destroyed-object")
const overlapEvent = require("../events/objects/overlap-objects")

class HPDamage extends Member {
  constructor() {
    super()

    this.objects = new Map

    this.onEvent(createEvent, payload => this.create(payload))
    this.onEvent(deleteEvent, payload => this.delete(payload))
    this.onEvent(overlapEvent, payload => this.applyDamage(payload))
  }

  create({ state:  { uuid, parentUuid, hp, damage, isApplyDamage }  }) {
    const newObject = new HP({
      parentUuid,
      hp,
      damage,
      isApplyDamage
    })
    this.objects.set(uuid, newObject)
  }

  delete({ state:  uuid  }) {
    this.objects.delete(uuid)
  }

  applyDamage({ state: uuids }) {
    if(!this.objects.has(uuids[0]) || !this.objects.has(uuids[1]))
      return

    const firstObj = this.objects.get(uuids[0])
    const secondObj = this.objects.get(uuids[1])

    if(firstObj.isDestroyed || secondObj.isDestroyed)
      return

    if(firstObj.parentUuid === uuids[1] || secondObj.parentUuid === uuids[0])
      return

    firstObj.applyDamage(secondObj.damage)
    secondObj.applyDamage(firstObj.damage)

    if(firstObj.isDestroyed)
      this.send(destroyEvent, { state: uuids[0] })

    if(secondObj.isDestroyed)
      this.send(destroyEvent, { state: uuids[1] })
  }
}

class HP {
  constructor({ parentUuid, hp = 1, damage, isApplyDamage = false }) {
    this.parentUuid = parentUuid
    this.hp = hp
    this.damage = damage || hp
    this.isApplyDamage = isApplyDamage

    this.isDestroyed = false 
  }

  applyDamage(damage) {
    if(!this.isApplyDamage)
      return

    this.hp -= damage

    if(this.hp <= 0)
      this.destroy()
  }

  destroy() {
    this.hp = 0
    this.isDestroyed = true
  }
}

module.exports = { HPDamage }