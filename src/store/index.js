const YAML = require('yaml')

const { Member, events: { buildEvent } } = require('@ellementul/united-events-environment')

const { Parser } = require('./parser')

const loadEvent = require("../events/load-resources")
const sendDataEvent = require("../events/load-data")


// const { default: characters } = require("../assets/characters.yaml")
// const { default: bullets } = require("../assets/characters.yaml")

class Store extends Member {
  constructor() {
    super()

    this.onEvent(loadEvent, () => this.loadResources())
    this.onEvent(buildEvent, payload => this.setConfig(payload))
  }

  setConfig({ config }) {
    this.config = config
  }

  async loadResources () {
    const resources = {}

    console.log('this.config', this.config)
    const response = await fetch(this.config.env.baseUrl + this.config.paths.assets.world)
    const file = await response.text()
    console.log('response', response)
    const { tileMap } = YAML.parse(file)

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

    resources.characters = []
    resources.bullets = []

    this.sendResources(resources)
  }

  sendResources (resources) {
    this.send(sendDataEvent, { resources })
  }
}

module.exports = { Store }