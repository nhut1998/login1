function setLocalStorage (key, value) {
  // khi xét thì cần stringify: object thường thành JSON
  localStorage.setItem(key, JSON.stringify(value))
  // window.localStorage
}

function getLocalStorage (key) {
  // khi mình get thì cần parse chuyển từ JSON thành bình thường lại
  var value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
  // if (value) return JSON.parse(value)
  // return null
}
