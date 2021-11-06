// nhóm kiểu dữ liệu nguyên thuỷ: primitive
var number = 1
var string = 'Haro'
var NULL = null
var UNDEFINED
var boolean = true // false

// nhóm dữ liệu còn lại: non-primitive
var object = {
  // key: value
  name: 'Haro',
  age: 18,
  speak: function () { // phương thức: method
    return 'Vietnamese'
  }
}
var array = ['hello', 'nihao']
function ham () {
  return 123
}
console.log(object.name) // cách 1
console.log(object['name']) // cách 2
console.log(object['speak']()) // cách 2
console.log(array[0]) // lấy thằng đầu
console.log(array.length)
console.log(array[array.length - 1]) // lấy thằng cuối

//   -1       0           1         2         3
var cars = ['Mercedes', 'Honda', 'Mazda', 'BWM']
// length = 4

function timViTri (event) {
  var timDuoc = -1
  for (var viTri = 1; viTri < cars.length; viTri++) { // vòng lặp dùng để duyệt mảng
    // console.log("duyệt mảng xe hơi để hiện ra từng xe", cars[viTri])
    if (cars[viTri] === event.target.value) {
      timDuoc = viTri
      break
    }
  }
  document.getElementById('tim-duoc').innerHTML = 'Kết quả là: ' + (timDuoc !== -1 ? 'Có' : 'Không có')
}

// viTri++ và ++viTri khác nhau chỗ nào
// i++ ===> i = i + 1
// ++i ===> i + 1 = i

function  timViTri (event) {
  var timDuoc = cars.findIndex(function (value) { // higher order function: hàm bậc cao hơn.
    return value === event.target.value // điều kiện tìm: lop === 'DDT1162' -> chỉ lấy thằng đầu tiên mà nó tìm được rồi đứt luôn không tìm nữa.
  })
  document.getElementById('tim-duoc').innerHTML = 'Kết quả là: ' + (timDuoc !== -1 ? 'Có' : 'Không có')
}

document.getElementById('tim-vi-tri').addEventListener('input', function (event) {
  console.log(event.target.value)
})

var soTuNhien = [1, 8, 10, 6, 4, 6, 13, 20, 100, 200]

var tongSoLe = 0
var tongSoChan = 0
var soLonNhat = soTuNhien[0]
var soNhoNhat = soTuNhien[0]
var mangSoLe = []
var mangSoChan = []

for (var i = 0; i < soTuNhien.length; i++) {
  // lấy tổng số lẻ
  if (soTuNhien[i] % 2 !== 0) { // số lẻ nghĩa là chia lấy dư = 1 # 0
    // tongSoLe = tongSoLe + soTuNhien[i]
    tongSoLe += soTuNhien[i]
    mangSoLe.push(soTuNhien[i])
  } else {
    tongSoChan += soTuNhien[i]
    mangSoChan.push(soTuNhien[i])
  }

  if (soTuNhien[i] > soLonNhat) {
    soLonNhat = soTuNhien[i]
  } 

  if (soTuNhien[i] < soNhoNhat) {
    soNhoNhat = soTuNhien[i]
  }
}

// cách 1
var ketQua = [tongSoLe, tongSoChan, soLonNhat, soNhoNhat]
var content = ''
ketQua.map(function (value) {
  content += value + ' '
})
document.getElementById('hien-thi').innerHTML = content

var numx2 = [1, 2, 3].map(function (num) { // return của hàm map là trả về từng phần tử và có thể xào nấu nó.
  if (num % 2 !== 0) { // check số lẻ
    return num * 2
    // return nghĩa là đã trả về rồi => đứt luôn ngay đây
  }
  return num // đồng nghĩa else
})

console.log(numx2)

var ketQua = [
  {
    text: 'Tổng số lẻ',
    value: tongSoLe
  },
  {
    text: 'Tổng số chẵn',
    value: tongSoChan
  },
  {
    text: 'Số lớn nhất',
    value: soLonNhat
  },
  {
    text: 'Số nhỏ nhất',
    value: soNhoNhat
  },
]

// cách 2:
// var content = ''
// ketQua.forEach(function (item, index) {
//   content += `
//     <tr>
//       <td>${item.text}</td>
//       <td>${item.value}</td>
//     </tr>
//   ` // template strings
// })
// document.getElementById('bang-hien-thi').innerHTML = content

// cách 3: siêu nâng cao
document.getElementById('bang-hien-thi').innerHTML = ketQua.reduce(function (content, item) {
  return content += `
    <tr>
      <td>${item.text}</td>
      <td>${item.value}</td>
    </tr>
  ` // template strings ---> ES6
}, '')

// map hay forEach đều là vòng lặp có công dụng giống như for

// thường sẽ sử dụng createElement, createTextNode + appendChild khi muốn tạo ra một thẻ bằng JavaScript.
// var hienThiSoLeEle = document.createElement('div')
// var hienThiSoLe = document.createTextNode(tongSoLe)
// hienThiSoLeEle.appendChild(hienThiSoLe)
// document.getElementById('hien-thi').appendChild(hienThiSoLeEle)

// toán tử
// &&: haro && duck && thien && nhut
// ||:
// ==:
// +=
// ++: vừa cộng vừa gán
// --: vừa trừ vừa gán

var haro = 1

// if (haro === "1") {
//   console.log(haro)
// } else {
//   console.log('Hengry')
// }

// kết luận: ==: chỉ quan tâm so sánh giá trị 1 == "1" -> true
// -> nghịch đảo của == là !=
// === quan tâm so sánh cả giá trị và kiểu dữ liệu: 1 === "1" -> false; 1 === 1 -> true
// -> nghịch đảo của === là !==
