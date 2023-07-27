const { Member } = require('@ellementul/united-events-environment')

const loadWorldEvent = require("../events/load-world")
const loadResorcesEvent = require("../events/load-resources")
const readySubSystemEvent = require("../events/ready-system")
const readyEvent = require("../events/ready-world")

class World extends Member {
  constructor() {
    super()

    this.neededSytsems = {
      Physic: false,
      Tiles: false
    }

    this.onEvent(loadWorldEvent, () => this.load())
  }

  load() {
    console.log("Loading systems...")
    this.onEvent(readySubSystemEvent, payload => this.readySystem(payload))
    
    this.send(loadResorcesEvent)
  }

  checkSystems() {
    return Object.values(this.neededSytsems).every(readySystem => readySystem)
  }

  readySystem({ state: { system } }) {

    this.neededSytsems[system] = true
    if(this.checkSystems())
      this.start()
  }

  start() {
    console.log("Ready all systems!")
    this.send(readyEvent)
  }
}

module.exports = { World }