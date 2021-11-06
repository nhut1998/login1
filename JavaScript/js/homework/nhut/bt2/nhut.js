// Bài tập 2
document.getElementById("btn-calc").addEventListener('click',function(event) {
    event.preventDefault()
    
    var soThuNhat = parseFloat(document.getElementById("soThuNhat").value);
    var soThuHai  = parseFloat(document.getElementById("soThuHai").value);
    var soThuBa   = parseFloat(document.getElementById("soThuBa").value);
    var soThuNTu  = parseFloat(document.getElementById("soThuTu").value);
    var soThuNam  = parseFloat(document.getElementById("soThuNam").value);
     console.log(soThuNhat, soThuHai, soThuBa, soThuNTu, soThuNam, trungBinh)
    
    var trungBinh = ((soThuNhat + soThuHai + soThuBa + soThuNTu + soThuNam)/5)
    document.getElementById("ket-qua").innerHTML = 'Kết quả: ' + trungBinh

})