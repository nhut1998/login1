// Đề bài, cho hai đối tượng Student và StudentList thuộc lớp học Frontend của Haro

// Thêm, xoá, sửa như bình thường (đúng format như bảng đã cho). Hình mẫu cho các records: assets/img/sample.png

// Chức năng tính học phí.
// Đầu vào: nhập tỷ số trận Việt Nam vs Malaysia.
// Xử lý: Việt Nam vô 1 trái được giảm 100k học phí, ngược lại Malaysia vô 1 trái sẽ tăng học phí lên 50k.
// Đầu ra: hiển thị kết quả ra bảng học phí theo đúng format của bảng đã cho.

// Note: ai làm xong bài này mới được giảm học phí nha. Chúc may mắn

var studentList = new StudentList()

renderStudentList(studentList.array)

function renderStudentList(students) {
  document.getElementById('result-tbody').innerHTML = students.reduce(function (content, stu) {
    return content += `
    <tr>
      <td>${stu.name}</td>
      <td><input type="checkbox" class="form-check-input ml-1" value="checkedValue" checked></td>
      <td>${stu.tuition}</td>
      <td>${stu.disCount}</td>
      <td>${stu.result}</td>
      <td>
        <button class="btn btn-danger" onclick="removeStudent('${stu.name}')">
            <i class="fa fa-trash"></i>
        </button>
        <button class="btn btn-primary" onclick="editStudent('${stu.name}')">
            <i class="fa fa-pencil"></i>
        </button>
      </td>
    </tr>
    `
  },'')
}

function getFormValue() {
  var studentForm = new FormData(document.forms.CreateStudentForm)

  var inDo = studentForm.get('inDo')
  var vietNam = studentForm.get('vietNam')
  var name = studentForm.get('name')
  var tuition = studentForm.get('tuition')

  return new Student(inDo, vietNam, name, tuition)
}

function resetTySo() {
  document.querySelector('input.inDoNe').value = 0
  document.querySelector('input.vietNamNe').value = 0
}

function createStudent(event) {
  event.preventDefault()

  var student = getFormValue()
  studentList.addToArray(student)

  resetTySo()
  document.forms.CreateStudentForm.reset()

  renderStudentList(studentList.array)
}

function removeStudent(name) {
  studentList.removeByName(name)
  renderStudentList(studentList.array)
}

function setFieldValue(fieldName, fieldValue) {
  document.forms.CreateStudentForm[fieldName].value = fieldValue
}

function editStudent (name) {
  var student = studentList.getByName(name)

  setFieldValue('name', student.name)
  setFieldValue('tuition', student.tuition)
}

function updateStudent () {
  studentList.updateStudent(getFormValue())
  renderStudentList(studentList.array)
}