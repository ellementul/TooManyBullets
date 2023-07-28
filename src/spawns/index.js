const { Member, Types, events: { time } } = require('@ellementul/united-events-environment')
const genUuid = Types.UUID.Def().rand

const addEvent = require("../events/objects/add-spawn")
const freeSpawnsEvent = require("../events/objects/free-spawns")
const spawnEvent = require("../events/objects/spawn-character")
const readyEvent = require("../events/objects/ready-spawned")

class Spawns extends Member {
  constructor() {
    super()

    this._spawns = new Map
    
    this.onEvent(addEvent, payload => this.addSpawn(payload))
    this.onEvent(time, () => this.checkSpawns())
    this.onEvent(spawnEvent, payload => this.spawnCharacter(payload))
  }

  addSpawn({ spawn }) {
    spawn.uuid = genUuid()
    spawn.isFree = true
    this._spawns.set(spawn.uuid, spawn)
  }

  getFreeSpawns() {
    const spawns = [...this._spawns.values()]

    return spawns
    .filter(spawn => spawn.isFree)
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  }

  checkSpawns() {
    if(this._spawns.size === 0)
      return
    
    this.send(freeSpawnsEvent, {
      spawns: this.getFreeSpawns()
    })
  }
  
  spawnCharacter({ spawnUuid, characterUuid}) {

    const spawn = this._spawns.get(spawnUuid)
    const position = {
      x: spawn.position.x,
      y: spawn.position.y
    }

    this.setCalldown(spawn)
    this.send(readyEvent, { spawnUuid, characterUuid, position })
  }

  setCalldown(spawn){
    spawn.isFree = false
    setTimeout(() => spawn.isFree = true, spawn.calldown || 60*1000)
  }
}


module.exports = { Spawns }