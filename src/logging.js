function Logging() {
  return function (payload) {
    switch(payload.message.access) {
      case "Local":
        break
      default:
        null
    }
  }
}

export { Logging }