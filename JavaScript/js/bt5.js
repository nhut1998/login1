// document.getElementById('number-input').addEventListener('change', function (event) {
//   console.log(event.target.value)
// })

function calcSum (event) {
  // lấy thẻ hiện tại đang có sự kiện change -> dùng event.target: đại diện cho thẻ đang ảnh hưởng sự kiện change
  var numberValue = event.target.value // vẫn còn dưới dạng string

  // Cách 1:
  // if (numberValue.length === 2) { // chỉ có string, array mới .length được
  //   var numberParsed = parseInt(numberValue)
  
  //   var num1 = Math.floor(numberParsed / 10) // floor: sàn nhà -> làm tròn xuống. ceil: trần nhà -> làm trên lên
  //   var num2 = numberParsed % 10
  
  //   document.getElementById('display-result').innerHTML = num1 + num2
  // } else {
  //   document.getElementById('display-result').innerHTML = 'Không hợp lệ'
  // }

  // Cách 2:
  var numberParsed = parseInt(numberValue)
  if (numberParsed >= 10 && numberParsed <= 99) {
    var num1 = Math.floor(numberParsed / 10) // floor: sàn nhà -> làm tròn xuống. ceil: trần nhà -> làm trên lên
    var num2 = numberParsed % 10
  
    document.getElementById('display-result').innerHTML = num1 + num2
  } else {
    document.getElementById('display-result').innerHTML = 'Không hợp lệ'
  }
}
