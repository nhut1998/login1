function Validation() {
  this.checkEmpty = function (value, errMessageID, errInput, errMessage) {
    if (value === '') { //nếu như giá trị bị rỗng thì hiện lỗi
      document.getElementById(errInput).classList.add('is-invalid')
      document.getElementById(errMessageID).innerHTML = errMessage
      document.getElementById(errMessageID).style.display = 'block'
      return false
    } else {
      document.getElementById(errInput).classList.remove('is-invalid')
      document.getElementById(errMessageID).innerHTML = ''
      document.getElementById(errMessageID).style.display = 'none'
      return true
    }
  }

  this.checkLength = function (value, min, max, errMessageID, errMessage) {
    if (value.toString().length > max || value.toString().length < min) {
      document.getElementById(errMessageID).innerHTML = errMessage
      document.getElementById(errMessageID).style.display = 'block'
      return false
    }
    document.getElementById(errMessageID).innerHTML = ''
    document.getElementById(errMessageID).style.display = 'none'
    return true
  }

  this.checkDuplicate = function (arr, value, errMessageID, errMessage) {
    var isDuplicate = arr.some(function (student) {
      return student.studentID === value  //return điều kiện
    })

    if (isDuplicate) {
      document.getElementById(errMessageID).innerHTML = errMessage
      document.getElementById(errMessageID).style.display = 'block'
      return false
    }
    document.getElementById(errMessageID).innerHTML = ''
    document.getElementById(errMessageID).style.display = 'none'
    return true
  }

  this.checkNotNumber = function (value, errMessageID, errMessage) {
    var isNumber = /^([^0-9]*)$/.test(value)

    if (!isNumber) {
      document.getElementById(errMessageID).innerHTML = errMessage
      document.getElementById(errMessageID).style.display = 'block'
      return false
    }
    document.getElementById(errMessageID).innerHTML = ''
    document.getElementById(errMessageID).style.display = 'none'
    return true
  }
}