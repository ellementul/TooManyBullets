const { Member } = require('@ellementul/united-events-environment')

const loadEvent = require("../events/load-resources")
const sendDataEvent = require("../events/load-data")

const { default: world } = require("../assets/world.yaml")

class Store extends Member {
  constructor() {
    super()

    this.onEvent(loadEvent, () => this.loadResources())
  }

  loadResources () {
    world.physic = {
      limitsRect: {
        x: -1 * world.tileMap.padding * world.tileMap.tileSize.width,
        y: -1 * world.tileMap.padding * world.tileMap.tileSize.height,
        height: (world.tileMap.size.height + world.tileMap.padding) * world.tileMap.tileSize.height,
        width: (world.tileMap.size.width + world.tileMap.padding) * world.tileMap.tileSize.width
      }
    }
    this.sendResources(world)
  }

  sendResources (resources) {
    this.send(sendDataEvent, { resources })
  }
}

module.exports = { Store }