const { Member } = require('@ellementul/united-events-environment')

const loadWorldEvent = require("../events/load-world")
const reloadWorldEvent = require("../events/reload-world")
const loadResorcesEvent = require("../events/load-resources")
const clearDataEvent = require("../events/clear-data")
const readySubSystemEvent = require("../events/ready-system")
const clearedSubSystemEvent = require("../events/cleared-system")
const readyEvent = require("../events/ready-world")


const INIT = Symbol()
const LOADING = Symbol()
const LOADED = Symbol()
const CLEARING = Symbol()

class World extends Member {
  constructor() {
    super()

    this.neededSytsems = {
      Physic: false,
      Tiles: false,
      Characters: false,
      Bullets: false
    }

    this.state = INIT

    this.onEvent(loadWorldEvent, () => this.load())
    this.onEvent(readySubSystemEvent, payload => this.readySystem(payload))
    this.onEvent(clearedSubSystemEvent, payload => this.clearSystem(payload))
    this.onEvent(reloadWorldEvent, () => this.reload())
  }

  load() {
    if(this.state != INIT) return
    this.state = LOADING
    console.log("Loading systems...")
    
    this.send(loadResorcesEvent)
  }

  checkSystems() {
    return Object.values(this.neededSytsems).every(readySystem => readySystem)
  }

  checkClearingSystems() {
    return !(Object.values(this.neededSytsems).some(readySystem => readySystem))
  }

  readySystem({ state: { system } }) {
    if(this.state != LOADING) return

    this.neededSytsems[system] = true
    console.log(`The ${system} system  is ready`)
    if(this.checkSystems()) {
      this.state = LOADED
      console.log("Ready all systems!")
      this.send(readyEvent)
    }
  }

  clearSystem({ state: { system } }) {
    if(this.state != CLEARING) return

    this.neededSytsems[system] = false
    console.log(`The ${system} system  is cleared`)
    if(this.checkClearingSystems()) {
      console.log("Cleared all systems!")
      this.state = INIT
      this.load()
    }
  }

  reload() {
    if(this.state != LOADED) return
    this.state = CLEARING
    this.send(clearDataEvent)
  }
}

module.exports = { World }