$( function() {
    $( "#ngaySinhNhanVien" ).datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true,
        maxDate: '-1D',
        yearRange: "-100:+40"
    });
} );

var mangNhanVien = [
    {
        ma: '01',
        hoTen: 'Bùi Đinh Việt Đức',
        ngaySinh: '01/04/1998',
        viTri: 'Frontend developer',
        luong: '$200000'
    }
]

hienThiDanhSachNhanVien()

function hienThiDanhSachNhanVien() {
    document.querySelector('tbody#danh-sach-nhan-vien').innerHTML = mangNhanVien.reduce(function (content, nhanVien) {
        return content += `
            <tr>
                <td>${nhanVien.ma}</td>
                <td>${nhanVien.hoTen}</td>
                <td>${nhanVien.ngaySinh}</td>
                <td>${nhanVien.viTri}</td>
                <td>${nhanVien.luong}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nhanVien.ma}')">Xoá</button>
                    <button class="btn btn-primary" onclick="suaNhanVien('${nhanVien.ma}')">Sửa</button>
                </td>
            </tr>
        `
    }, '')
}

function themNhanVienMoi () {
    var ma = document.getElementById('maNhanVien').value
    var hoTen = document.getElementById('hoTenNhanVien').value
    var ngaySinh = document.getElementById('ngaySinhNhanVien').value
    var viTri = document.getElementById('viTriNhanVien').value
    var luong = document.getElementById('luongNhanVien').value

    var nhanVien = {   
        ma: ma,
        hoTen: hoTen,
        ngaySinh: ngaySinh,
        viTri: viTri,
        luong: luong
    }

    mangNhanVien.push(nhanVien)
    $('#them-nhan-vien-modal').modal('hide')
    hienThiDanhSachNhanVien()
}

document.getElementById('them-nhan-vien-moi').addEventListener('click',function () {
    $('#them-nhan-vien-modal').modal('show')

    document.querySelector('#them-nhan-vien-modal h5.modal-title').innerHTML = 'Thêm nhân viên'
    document.querySelectorAll('#them-nhan-vien-modal .modal-footer button')[1].style.display = 'block'  //nút thêm mới
    document.querySelectorAll('#them-nhan-vien-modal .modal-footer button')[2].style.display = 'none'  //nuuts cập nhật
})

function timViTri(maNhanVien) {
    return mangNhanVien.findIndex(function (nhanVien) {  //findIndex: trả về vị trí nơi mà cái ID === tham số đầu vào
        return nhanVien.ma === maNhanVien
    })
}

function xoaNhanVien(maNhanVien) {
    var viTriNhanVienMuonXoa = timViTri(maNhanVien)
    mangNhanVien.splice(viTriNhanVienMuonXoa, 1)
    hienThiDanhSachNhanVien()
}

var viTriNhanVienMuonSua = -1

function layThongTinNhanVien(maNhanVien) {
    viTriNhanVienMuonSua = timViTri(maNhanVien)
    var nhanVien = mangNhanVien[viTriNhanVienMuonSua]

    document.getElementById('maNhanVien').value = nhanVien.ma
    document.getElementById('hoTenNhanVien').value = nhanVien.hoTen
    document.getElementById('ngaySinhNhanVien').value = nhanVien.ngaySinh
    document.getElementById('viTriNhanVien').value = nhanVien.viTri
    document.getElementById('luongNhanVien').value = nhanVien.luong
}

function suaNhanVien(maNhanVien) {
    layThongTinNhanVien(maNhanVien)
    document.getElementById('them-nhan-vien-moi').click()

    document.querySelector('#them-nhan-vien-modal h5.modal-title').innerHTML = 'Sửa Nhân Viên'
    document.querySelectorAll('#them-nhan-vien-modal .modal-footer button')[1].style.display = 'none'
    document.querySelectorAll('#them-nhan-vien-modal .modal-footer button')[2].style.display = 'block'
}

function capNhatNhanVien() {
    var ma = document.getElementById('maNhanVien').value
    var hoTen = document.getElementById('hoTenNhanVien').value
    var ngaySinh = document.getElementById('ngaySinhNhanVien').value
    var viTri = document.getElementById('viTriNhanVien').value
    var luong = document.getElementById('luongNhanVien').value

    mangNhanVien[viTriNhanVienMuonSua].ma = ma
    mangNhanVien[viTriNhanVienMuonSua].hoTen = hoTen
    mangNhanVien[viTriNhanVienMuonSua].ngaySinh = ngaySinh
    mangNhanVien[viTriNhanVienMuonSua].viTri = viTri
    mangNhanVien[viTriNhanVienMuonSua].luong = luong

    $('#them-nhan-vien-modal').modal('hide')
    hienThiDanhSachNhanVien()
}

document.getElementById('them-nhan-vien-moi').addEventListener('click', function () {
    document.querySelectorAll('#them-nhan-vien-modal .modal-footer button')[1].style.display = 'block'
    document.querySelectorAll('#them-nhan-vien-modal .modal-footer button')[2].style.display = 'none'
})