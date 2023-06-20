const { Member } = require('@ellementul/united-events-environment')
const { events: { time } } = require('@ellementul/uee-timeticker')
const startSessionEvent = require("../events/start-session")
const readyEvent = require("../events/ready-players-manager")
const pingEvent = require("../events/ping-players")

let timeout = 0
const MSTIMELIMIT = 500
class PlayersManager extends Member {
  constructor() {
    super()

    this.onEvent(startSessionEvent, () => this.start()) // Subscribing on event
  }

  start() {
    this.onEvent(time, payload => this.tick(payload))
    this.send(readyEvent)
  }

  tick({ state: { mstime }}) {
    if(mstime - timeout > MSTIMELIMIT) {
      timeout = mstime
      this.runOutTimeout()
    }
    else {
      this.checkPlayersPong()
    }
  }
  checkPlayersPong() {
    
  }

  runOutTimeout() {
    //Disconnect Players Without Pong

    this.send(pingEvent)
  }
}

module.exports = { PlayersManager }