function tatDen () {
  // document.getElementById('light').src = 'img/pic_bulboff.gif'
  document.getElementById('light1').setAttribute("src", 'img/pic_bulboff.gif')
  var lightSrc = document.getElementById('light').getAttribute("src")
  console.log(lightSrc)
}

function moDen () {
  document.getElementById('light1').src = 'img/pic_bulbon.gif'
}

// khi vẫn còn 2 nút bật tắt
function toggle (img) {
  document.getElementById('light2').src = 'img/' + img
}

// khi còn 1 nút cho cả bật và tắt

var isOn = false // kiểu dữ liệu boolean: chỉ có true hoặc false

function toggle1 () {
  var img = ""
  isOn = !isOn // dấu nghịch đảo trạng thái -> !false = true; !true = false

  if (isOn) {
    img = 'pic_bulbon.gif'
  } else {
    img = 'pic_bulboff.gif'
  }

  document.getElementById('light3').src = 'img/' + img
}

var isOn1 = false

function toggle2 (e) {
  isOn1 = !isOn1 // dấu nghịch đảo trạng thái -> !false = true; !true = false

  // if (isOn1) {
  //   // trong trường hợp có event: e.target === document.getElementById()
  //   // e.target.setAttribute("style", 'background-color: purple; color: red')
  //   e.target.setAttribute("class", 'btn btn-tat-den')
  // } else {
  //   e.target.setAttribute("class", 'btn btn-success')
  // }
  
  e.target.setAttribute("class", isOn1 ? 'btn btn-tat-den' : 'btn btn-success')
  
  // sau này học: e.target.setAttribute() = e.target['setAttribute']()
  // e.target[isOn1 ? 'setAttribute' : 'removeAttribute']("style", isOn1 && 'background-color: red')

  var img = isOn1 ? 'pic_bulbon.gif' : 'pic_bulboff.gif' // toán tử 3 ngôi: Ternary
  // ? mệnh đề đúng (if)
  // : mệnh đề sai (else)

  document.getElementById('light4').src = 'img/' + img
}

// cách khai báo hàm declaration
// function toggle1 () {

// }

// cách khai báo hàm là expression
// var toggle1 = function () { // anonymous function

// }

// (function () {

// })
