// Đề bài, cho hai đối tượng Student và StudentList thuộc lớp học Frontend của Haro

// Thêm, xoá, sửa như bình thường (đúng format như bảng đã cho). Hình mẫu cho các records: assets/img/sample.png

// Chức năng tính học phí.
// Đầu vào: nhập tỷ số trận Việt Nam vs Malaysia.
// Xử lý: Việt Nam vô 1 trái được giảm 100k học phí, ngược lại Malaysia vô 1 trái sẽ tăng học phí lên 50k.
// Đầu ra: hiển thị kết quả ra bảng học phí theo đúng format của bảng đã cho.

// Note: ai làm xong bài này mới được giảm học phí nha. Chúc may mắn

var studentList = new StudentList()

function renderStudentList(students) {
  document.getElementById('result-tbody').innerHTML = students.reduce(function (content, stu) {
    return content += `
    <tr>
      <td>${stu.name}</td>
      <td>${stu.didIt}</td>
      <td>${stu.tuition}</td>
      <td>${stu.disCount}</td>
      <td>${stu.result}</td>
      <td>
        <button class="btn btn-danger" onclick="removeStudent('${stu.studentID}')">
            <i class="fa fa-trash"></i>
        </button>
        <button class="btn btn-primary" onclick="editStudent('${stu.studentID}')">
            <i class="fa fa-pencil"></i>
        </button>
      </td>
    </tr>
    `
  })
}