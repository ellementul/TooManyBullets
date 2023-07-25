const { Member } = require('@ellementul/united-events-environment')

const loadWorldEvent = require("../events/load-world")
const loadResorcesEvent = require("../events/load-resources")
const readyEvent = require("../events/ready-world")
const loadTilesEvent = require("../events/load-tiles")

const { default: world } = require("../assets/world.yaml")

class World extends Member {
  constructor() {
    super()

    this.onEvent(loadWorldEvent, () => this.load())
  }

  load() {
    this.send(loadResorcesEvent)
    this.start()
  }
  start() {
    this.send(loadTilesEvent, { state: world.tileMap })
    this.send(readyEvent)
  }
}

module.exports = { World }