function Logging() {
  return function (payload) {
    switch(payload.message.access) {
      case "Local":
        // console.log(payload.message)
        break
      default:
        null
    }
  }
}

export { Logging }