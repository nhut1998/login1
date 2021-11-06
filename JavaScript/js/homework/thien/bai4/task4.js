document.getElementById('btn-calc').addEventListener('click', function (event){
    event.preventDefault();

    var length = parseFloat(document.getElementById('length').value)
    var width = parseFloat(document.getElementById('width').value)
    
    document.getElementById('showDienTich').innerHTML = 'Diện tích: ' + ( length * width )
    document.getElementById('showChuVi').innerHTML = 'Chu vi: ' + ( ( length + width ) * 2 )
})