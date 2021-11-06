// // Bài tập 1
// document.getElementById("btn-calc-salary").addEventListener('click',function(event){
//     event.preventDefault()
//     var soNgayLam = parseFloat(document.getElementById("soNgayLam").value).toFixed(3)

//     var luongNgay = 100000

//     var luongThang = soNgayLam * luongNgay

//     document.getElementById("hien-thi-luong-bang-so").innerHTML = 'Lương Thực Nhận: ' + luongThang + 'vnđ'
// })

// // Bài tập 2
// document.getElementById("btn-calc-average").addEventListener('click',function(event){
//     event.preventDefault()
//     var soThuNhat = parseFloat(document.getElementById("soThuNhat").value)
//     var soThuHai = parseFloat(document.getElementById("soThuHai").value)
//     var soThuBa = parseFloat(document.getElementById("soThuBa").value)
//     var soThuTu = parseFloat(document.getElementById("soThuTu").value)
//     var soThuNam = parseFloat(document.getElementById("soThuNam").value)

//     var averageNumber = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5
    
//     document.getElementById("hien-thi-average").innerHTML = 'Số trung bình cộng: ' + averageNumber
// })

// //Bài tập 3
// document.getElementById("btn-calc-usd-vnd").addEventListener('click',function(event){
//     event.preventDefault()
//     var USD = parseFloat(document.getElementById("USD").value)

//     var vnd = 23500

//     var usdVnd = USD * vnd

//     document.getElementById("hien-thi-vnd").innerHTML = 'Số tiền sau khi quy đôi: ' + usdVnd
// })

// //Bài tập 4
// document.getElementById("btn-calc-dt-cv").addEventListener('click',function(event){
//     event.preventDefault()
//     var chieuDai = parseFloat(document.getElementById("chieuDai").value)
//     var chieuRong = parseFloat(document.getElementById("chieuRong").value)

//     var dienTich = chieuDai * chieuRong
//     var chuVi = (chieuDai + chieuRong) * 2

//     document.getElementById("hien-thi-dien-tich").innerHTML = 'Diện tích hình chữ nhật: ' + dienTich
//     document.getElementById("hien-thi-chu-vi").innerHTML = 'Chu vi hình chữ nhật: ' + chuVi
// })

// //Bài tập 5
// function calcSum (event) {
//     var numberValue = parseInt(event.target.value)

//     var num1 = Math.floor(numberValue / 10) //floor: sàn nhà => làm tròn xuống
//     var num2 = numberValue % 10
//     console.log(num1,num2)

//     document.getElementById("kq").innerHTML = num1 + num2

//     var numberParsed = parseInt(numberValue)
//     if (numberParsed >= 10 && numberParsed <= 99) {
//         var num1 = Math.floor(numberParsed / 10)
//         var num2 = numberValue % 10
//     }
// }

// nhiều code
function tat(){
    document.getElementById("light").src = "pic_bulboff.gif"
}
function bat(){
    document.getElementById("light").src = "pic_bulbon.gif"
}




var cars = ['Mercedes', 'Honda', 'Mazda', 'BWM']
//length = 4

function timViTri (event) {
    var timDuoc = -1
    for (var viTri = 1; viTri < cars.length; viTri = viTri + 1) {
        console.log(viTri)
        //console.log("duyệt mảng xe hơi để hiện ra từng xe", cars[viTri])
        if (cars[viTri] === event.target.value) {
            timDuoc = viTri
            break
        }
    }
    document.getElementById('tim-duoc').innerHTML = 'Ket qua la: ' + (timDuoc !== -1 ? 'Co' : 'Khong Co')
}

function timViTri (event) {
    var timDuoc = cars.findIndex(function (value, viTri) {
        console.log(viTri)
        return value === event.target.value
    })
    document.getElementById('tim-duoc').innerHTML = 'Ket qua la: ' + (timDuoc !== -1 ? 'Co' : 'Khong Co')
}



var soTuNhien = [1, 8, 10, 6, 4, 6, 13, 20, 100, 200]

var tongSoLe = 0
var tongSoChan = 0
var soLonNhat = 0
var soNhoNhat = 0
for (var i=0; i < soTuNhien.length; i++) {
    //lấy tổng số lẻ
    if (soTuNhien[i] % 2 !== 0) { //số lẻ nghĩa là chia lấy dư = 1 # 0
        tongSoLe += soTuNhien[i]
    } else {
        tongSoChan += soTuNhien[i]
    }

    if (soTuNhien[i] > soLonNhat) {
        soLonNhat = soTuNhien[i]
    }
    if (soTuNhien[i] < soNhoNhat) {
        soNhoNhat = soTuNhien[i]
    }
}
// console.log(tongSoLe, tongSoChan, soLonNhat, soNhoNhat)

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
        text: 'Số Lớn Nhất',
        value: soLonNhat
    },
    {
        text: 'Số Nhỏ Nhất',
        value: soNhoNhat
    },
]
var content = ''
ketQua.forEach(function (item,text){
    // return content += `<div>${item.text}: ${item.value}</div>`
    content += `
        <tr>
            <td>${item.text}</td>
            <td>${item.value}</td>
        </tr>
    `
})
document.getElementById('bang-hien-thi').innerHTML = content