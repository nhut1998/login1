function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringiá»³(value))
}

function getLocalStorage(key) {
  var value = localStorage.getItem(key)
  if (value) return JSON.parse(value)
  return null
}