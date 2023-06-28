const { Member, Types } = require('@ellementul/united-events-environment')

const addEvent = require("../events/add-spawn")
const spawnEvent = require("../events/spawn-character")

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
    console.log(character)
  }
}


module.exports = { Spawns }