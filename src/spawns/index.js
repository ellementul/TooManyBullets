const { Member, Types } = require('@ellementul/united-events-environment')

const addEvent = require("../events/objects/add-spawn")
const spawnEvent = require("../events/objects/spawn-character")
const readyEvent = require("../events/objects/ready-spawned")

class Spawns extends Member {
  constructor() {
    super()

    this._spawns = []
    
    this.onEvent(addEvent, payload => this.addSpawn(payload))
    this.onEvent(spawnEvent, payload => this.spawnCharacter(payload))
  }

  addSpawn({ state: spawn }) {
    this._spawns.push(spawn)
  }
  
  spawnCharacter({ state: character }) {
    if(this._spawns.length == 0)
      throw new Error("There are not spawns!")

    const spawn = this._spawns[0]
    const characterUuid = character.uuid
    const position = {
      x: spawn.position.x,
      y: spawn.position.y
    }

    this.send(readyEvent, { characterUuid, position })
  }
}


module.exports = { Spawns }