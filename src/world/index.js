const { Member } = require('@ellementul/united-events-environment')

const loadWorldEvent = require("../events/load-world")
const readyEvent = require("../events/ready-world")

class World extends Member {
  constructor() {
    super()

    this.onEvent(loadWorldEvent, () => this.start())
  }

  start() {
    this.send(readyEvent)
  }
}

module.exports = { World }