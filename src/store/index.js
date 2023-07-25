const { Member } = require('@ellementul/united-events-environment')

const loadEvent = require("../events/load-resources")
const sendDataEvent = require("../events/load-data")

class Store extends Member {
  constructor() {
    super()

    this.onEvent(loadEvent, () => this.loadResources())
  }

  loadResources () {

    this.sendResources("resources")
  }

  sendResources (resources) {
    console.log(sendDataEvent, { resources })
    this.send(sendDataEvent, { resources })
  }
}

module.exports = { Store }