// date picker cho ngày sinh của nhân viên
$("#ngaySinhNhanVien").datepicker();

var mangNhanVien = [
  {
    ma: '01',
    hoTen: 'Nguyễn Thiện Hảo',
    ngaySinh: '31/10/1998',
    viTri: 'Frontend developer',
    luong: '$2000'
  }
]

// v8engine
// hoisting
hienThiDanhSachNhanVien()

function hienThiDanhSachNhanVien () {
// dùng reduce --> cố ý trả về string để trình duyệt đọc được
// giống CSS
// document.querySelector('tbody#danh-sach-nhan-vien').innerHTML = mangNhanVien.reduce(function (content, nhanVien) {
//   return content += `
//     <tr>
//       <td>${nhanVien.ma}</td>
//       <td>${nhanVien.hoTen}</td>
//       <td>${nhanVien.ngaySinh}</td>
//       <td>${nhanVien.viTri}</td>
//       <td>${nhanVien.luong}</td>
//       <td>
//         <button class="btn btn-danger" onclick="xoaNhanVien('${nhanVien.ma}')">Xoá</button>
//         <button class="btn btn-primary" onclick="suaNhanVien('${nhanVien.ma}')">Sửa</button>
//       </td>
//     </tr>
//   `
// }, '')

// dùng forEach
var content = ''
mangNhanVien.forEach(function (nhanVien) {
  content += `
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
})
document.querySelector('tbody#danh-sach-nhan-vien').innerHTML = content

// dùng map
// document.querySelector('tbody#danh-sach-nhan-vien').innerHTML = mangNhanVien.map(function (nhanVien) {
//   return `
//     <tr>
//       <td>${nhanVien.ma}</td>
//       <td>${nhanVien.hoTen}</td>
//       <td>${nhanVien.ngaySinh}</td>
//       <td>${nhanVien.viTri}</td>
//       <td>${nhanVien.luong}</td>
//       <td>
//         <button class="btn btn-danger" onclick="xoaNhanVien('${nhanVien.ma}')">Xoá</button>
//         <button class="btn btn-primary" onclick="suaNhanVien('${nhanVien.ma}')">Sửa</button>
//       </td>
//     </tr>
//   `
// }).join('')

// join là hàm ngược với split
}

document.getElementById('them-nhan-vien-moi').addEventListener('click', function () {
  $('#them-nhan-vien-modal').modal('show')

  document.querySelector('#them-nhan-vien-modal h5.modal-title').innerHTML = 'Thêm nhân viên'
  document.querySelectorAll('#them-nhan-vien-modal .modal-footer button')[1].style.display = 'block' // nút thêm mới
  document.querySelectorAll('#them-nhan-vien-modal .modal-footer button')[2].style.display = 'none' // nút cập nhật

  // kiến thức ES6: bóc tách phần tử ---> destructuring (học sau)
  // var [, nutThemMoi, nutCapNhat] = document.querySelectorAll('#them-nhan-vien-modal .modal-footer button')
  // console.log(nutThemMoi, nutCapNhat)
  //      0         1          2
  const [nutTat, nutThemMoi, nutCapNhat] = document.querySelectorAll('#them-nhan-vien-modal .modal-footer button')
  nutThemMoi.style.display = 'block'
})

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

  mangNhanVien.push(nhanVien) // đưa nhân viên mới vô mảng nhân viên
  $('#them-nhan-vien-modal').modal('hide') // trên docs của bootstrap phần modal sẽ có
  // alert('Thêm nhân viên mới thành công!')
  hienThiDanhSachNhanVien()
  swal({
    title: "Thêm nhân viên mới thành công!",
    icon: "success",
  });
}

function timViTri (maNhanVien) {
  return mangNhanVien.findIndex(function (nhanVien) {
    return nhanVien.ma == maNhanVien
  })
}

function xoaNhanVien (maNhanVien) {
  if (!confirm('Bạn có thật sự muốn xoá nó không?')) return

  var viTriNhanVienMuonXoa = timViTri(maNhanVien)

  if (viTriNhanVienMuonXoa !== -1) {
    mangNhanVien.splice(viTriNhanVienMuonXoa, 1) // cắt bất kỳ phần tử nào mình muốn
    hienThiDanhSachNhanVien()
    alert(`Đã xoá nhân viên có mã ${maNhanVien}!`)
  }
}

// update: layThongTinNhanVien ---> suaNhanVien ---> capNhatNhanVien
var viTriNhanVienMuonSua = -1 // thực hiện khai báo biến toàn cục -> global, rồi gán giá trị mặc định -1

function layThongTinNhanVien (nhanVien) {  
  document.getElementById('maNhanVien').value = nhanVien.ma
  document.getElementById('hoTenNhanVien').value = nhanVien.hoTen
  document.getElementById('ngaySinhNhanVien').value = nhanVien.ngaySinh
  document.getElementById('viTriNhanVien').value = nhanVien.viTri
  document.getElementById('luongNhanVien').value = nhanVien.luong
}

function suaNhanVien (maNhanVien) {
  viTriNhanVienMuonSua = timViTri(maNhanVien) // thực hiện gán

  if (viTriNhanVienMuonSua !== -1) {
    $('#them-nhan-vien-modal').modal('show')
    layThongTinNhanVien(mangNhanVien[viTriNhanVienMuonSua])
  
    document.querySelector('#them-nhan-vien-modal h5.modal-title').innerHTML = 'Sửa nhân viên'
    document.querySelectorAll('#them-nhan-vien-modal .modal-footer button')[1].style.display = 'none' // nút thêm mới
    document.querySelectorAll('#them-nhan-vien-modal .modal-footer button')[2].style.display = 'block' // nút cập nhật
  }
}

function capNhatNhanVien () {
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

  $('#them-nhan-vien-modal').modal('hide') // trên docs của bootstrap phần modal sẽ có
  hienThiDanhSachNhanVien()
}
