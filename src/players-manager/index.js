const { Member } = require('@ellementul/united-events-environment')
const startSessionEvent = require("../events/start-session")
const readyEvent = require("../events/ready-players-manager")

class PlayersManager extends Member {
  constructor() {
    super()

    this.onEvent(startSessionEvent, () => this.start()) // Subscribing on event
  }

  start() {
    this.send(readyEvent)
  }
}

module.exports = { PlayersManager }