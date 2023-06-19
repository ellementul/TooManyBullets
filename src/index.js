const { UnitedEventsEnvironment: UEE } = require('@ellementul/united-events-environment')
const { WsTransport } = require('@ellementul/uee-ws-browser-transport')
const { Ticker } = require('@ellementul/uee-timeticker')

const membersList = {
  roles: [
    {
      role: "Ticker",
      memberConstructor: Ticker
    }
  ]
}

env = new UEE({
  Transport: WsTransport,
  membersList,
  logging: payload => console.log(payload.message),
  isShowErrors: true
})


env.run({
  isHost: true,
  signalServerAddress: "ws://127.0.0.1:8080",
})