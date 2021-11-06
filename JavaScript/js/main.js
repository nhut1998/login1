// DOM: Document Object Model

// get element by id: lấy một thẻ bằng id -> là một hàm (function) nhận vào đối số là id của thẻ (nhánh cây)
// var: viết tắt của variable -> biến
// biến email hiện tại đang là một cái nhánh
var email = document.getElementById("exampleInputEmail1") // gọi hàm
var password = document.getElementById("exampleInputPassword1")
// lấy cái lá value ra
console.log(email.value)

// event: sự kiện. VD: click, double click, input change,...
document.getElementById("btn-submit").addEventListener('click', function (event) {
  event.preventDefault() // chặn load trang
  // trình duyệt chờ sự kiện click của mấy ông để hiện ra giá trị của ô nhập email
  console.log(email.value)
  console.log(password.value)
})
