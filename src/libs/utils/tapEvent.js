const addListener = (element, fn, startEvent, endEvent, ms = 200) => {
  var timer,
    touchStarted = false,
    // spriteUUID,
    vector

  const registerTapHandler = e => {
    // spriteUUID = e.intersects[0].object.uuid
    vector = e.data.global.clone()
    timer = setTimeout(() => unregisterTapHandler(), ms)
    touchStarted = true
  }

  const unregisterTapHandler = () => {
    touchStarted = false
    clearTimeout(timer)
  }

  const tapHandler = e => {
    if (touchStarted && vector && (vector.sub(e.data.global).length() < 0.001)) {
      fn()
    }
    unregisterTapHandler()
  }

  element.on(startEvent, registerTapHandler)
  element.on(endEvent, tapHandler)
}


const tapEvent = (element, fn) => {
  addListener(element, fn, 'touchstart', 'touchend', 200)
  addListener(element, fn, 'mousedown', 'mouseup', 200)
}


export default tapEvent