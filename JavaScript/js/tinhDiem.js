// cách 1
// var tinhHeChu = function () {

// }

// cách 2
function tinhHeChu (diemHe10) {
  var ketQuaTinhHeChu = ""
  if (diemHe10 <= 10 && diemHe10 >= 7) {
    ketQuaTinhHeChu = "A"
  } else if (diemHe10 < 7 && diemHe10 >= 5.5) {
    ketQuaTinhHeChu = "B"
  } else if (diemHe10 < 5.5 && diemHe10 >= 4) {
    ketQuaTinhHeChu = "C"
  } else {
    ketQuaTinhHeChu = "D"
  }
  return ketQuaTinhHeChu
}

// cách 3: khi nào học tới ES6 rồi mình vô sâu cái này
// var tinhHeChu = () => {

// }

document.getElementById("btn-calc-score").addEventListener('click', function (event) {
  event.preventDefault() // chặn reload

  // cách viết tên biến trong JS: camelCase
  var tyLe = document.getElementById("tyLe").value
  // hoặc có thể dùng snake_case
  // var ty_le = document.getElementById("tyLe")
  var diemChuyenCan = parseFloat(document.getElementById("diemChuyenCan").value)
  var diemThiGiuaKy = parseFloat(document.getElementById("diemThiGiuaKy").value) 
  // hàm parseInt để đổi chuỗi thành số interger (số nguyên)
  // hàm parseFloat để đổi chuỗi thành số thập phân
  var diemThiCuoiKy = document.getElementById("diemThiCuoiKy").value * 1 // một cách khác để đổi chuỗi thành số

  // nếu ra kết quả là NaN: nghĩa là Not a Number

  var tyLeDiemChuyenCan = 10

  // tìm keyword "split javascript" -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  var tyLeDiemQuaTrinh = tyLe.split("/")[0]
  var tyLeDiemThiCuoiKy = tyLe.split("/")[1]

  var diemQuaTrinh = (diemChuyenCan * tyLeDiemChuyenCan / 100) + (diemThiGiuaKy * (tyLeDiemQuaTrinh - tyLeDiemChuyenCan) / 100)
  var he10 = diemQuaTrinh + (diemThiCuoiKy * tyLeDiemThiCuoiKy / 100)

  // hiển thị điểm ra giao diện
  document.getElementById("hien-thi-he-10").innerHTML = 'Hệ 10: ' + he10
  document.getElementById("hien-thi-he-chu").innerHTML = 'Hệ chữ: ' + tinhHeChu(he10)
})
