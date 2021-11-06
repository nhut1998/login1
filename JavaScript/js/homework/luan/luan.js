// Bài tập 1
document.getElementById("btn-calc-salary").addEventListener('click',function(event){
    event.preventDefault()
    var soNgayLam = parseFloat(document.getElementById("soNgayLam").value)

    var luongNgay = 100000

    var luongThang = soNgayLam * luongNgay

    document.getElementById("hien-thi-luong-bang-so").innerHTML = 'Lương Thực Nhận: ' + luongThang
})

// Bài tập 2
document.getElementById("btn-calc-medium").addEventListener('click',function(event){
    event.preventDefault()
    var giaTriThuNhat = parseFloat(document.getElementById("giaTriThuNhat").value)
    var giaTriThuHai = parseFloat(document.getElementById("giaTriThuHai").value)
    var giaTriThuBa = parseFloat(document.getElementById("giaTriThuBa").value)
    var giaTriThuTu = parseFloat(document.getElementById("giaTriThuTu").value)
    var giaTriThuNam = parseFloat(document.getElementById("giaTriThuNam").value)

    var giaTriTrungBinh = (( giaTriThuNhat + giaTriThuHai + giaTriThuBa + giaTriThuTu + giaTriThuNam) / 5 )
    document.getElementById("hien-thi-gia-tri-trung-binh").innerHTML = 'Gía trị trung bình : ' + giaTriTrungBinh
})

// Bài tập 3

document.getElementById("btn-calc-changemoney").addEventListener('click',function(event){
    event.preventDefault()
    var soUSD = parseFloat(document.getElementById("soUSD").value)

    var USD = 23500
    var quyDoi = ( soUSD * USD )
    document.getElementById("hien-thi-so-tien").innerHTML = 'Số tiền VND : ' + quyDoi
})

// Bài tập 4

document.getElementById("btn-calc-cv").addEventListener('click',function(event){
    event.preventDefault()
    var chieuDai = parseFloat(document.getElementById("chieuDai").value)
    var chieuRong = parseFloat(document.getElementById("chieuRong").value)

    var chuVi = (( chieuDai + chieuRong ) / 2 )
    var dienTich = ( chieuDai * chieuRong )
    document.getElementById("hien-thi-ket-qua-chu-vi").innerHTML = 'Chu vi : ' + chuVi
    document.getElementById("hien-thi-ket-qua-dien-tich").innerHTML = 'Diện tích : ' + dienTich
})