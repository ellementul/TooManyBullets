const { Member } = require('@ellementul/united-events-environment')

const loadWorldEvent = require("../events/load-world")
const readyEvent = require("../events/ready-world")
const loadTilesEvent = require("../events/load-tiles")

const world = require("../assets/world.json")

class World extends Member {
  constructor() {
    super()

    this.onEvent(loadWorldEvent, () => this.start())
  }

  start() {
    this.send(loadTilesEvent, { state: world.tileMap })
    this.send(readyEvent)
  }
}

module.exports = { World }