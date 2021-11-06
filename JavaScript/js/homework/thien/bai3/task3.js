// Bài tập 3
document.getElementById("btn-convert").addEventListener('click', function (event) {
    event.preventDefault()

    var usdValue = parseFloat(document.getElementById("usd").value)
    var tyGia = 23.500
    var ketQua = usdValue * tyGia

    document.getElementById("vnd").innerHTML = ketQua + 'VNĐ'
})