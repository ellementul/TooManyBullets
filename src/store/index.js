const { Member } = require('@ellementul/united-events-environment')

const { Parser } = require('./parser')

const loadEvent = require("../events/load-resources")
const sendDataEvent = require("../events/load-data")

const { default: { tileMap } } = require("../assets/world.yaml")
const { default: characters } = require("../assets/characters.yaml")

class Store extends Member {
  constructor() {
    super()

    this.onEvent(loadEvent, () => this.loadResources())
  }

  loadResources () {
    const resources = {}
    resources.physic = {
      limitsRect: {
        x: -1 * tileMap.padding * tileMap.tileSize.width,
        y: -1 * tileMap.padding * tileMap.tileSize.height,
        height: (tileMap.size.height + tileMap.padding) * tileMap.tileSize.height,
        width: (tileMap.size.width + tileMap.padding) * tileMap.tileSize.width
      }
    }

    const parser = new Parser
    resources.tileMap = parser.parsing(tileMap)

    resources.characters = characters

    this.sendResources(resources)
  }

  sendResources (resources) {
    this.send(sendDataEvent, { resources })
  }
}

module.exports = { Store }