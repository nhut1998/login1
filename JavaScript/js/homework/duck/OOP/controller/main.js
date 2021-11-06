function chooseAvatar () {
  document.getElementById('avatar').click()
}

// function previewAvatar (event) {
//   var preview = document.querySelector('img.avatar');
//   var file = event.target.files[0]; // [0] --> cách để lấy file đầu tiên từ mảng files
//   var reader = new FileReader(); // tạo ra một instance của đối tượng FileReader

//   reader.addEventListener('load', function () {
//     // convert image file to base64 string
//     preview.src = reader.result;
//   }, false);

//   if (file) reader.readAsDataURL(file) // nếu if chỉ 1 dòng, thì có thể bỏ ngoặc {}
// }

function previewAvatar (event) {
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  document.querySelector('img.avatar').setAttribute('src', URL.createObjectURL(event.target.files[0]))
  // document.querySelector('img.avatar').src = URL.createObjectURL(event.target.files[0])
}

document.getElementById('process-ratio').addEventListener('keyup', function (event) {
  var value = event.target.value
  document.getElementById('final-ratio').value = value ? 100 - value : 100
})

document.getElementById('final-ratio').addEventListener('keyup', function (event) {
  var value = event.target.value
  document.getElementById('process-ratio').value = value ? 100 - value : 100
})

// khởi tạo một instance "studentList" của đối tượng "StudentList"
var studentList = new StudentList()

var validation = new Validation()



renderStudentList(studentList.array)

function renderStudentList (students) { // khai báo declaration function
  var renderAvatar = function (avatar) { // khai báo expresion function
    // if (avatar) { // đại diện true hoặc false, string: có giá trị = true, '' = false, null = false, undefined = false, number: lấy >= 1 = true, 0 = false
    //   return `
    //     <img 
    //       src="${URL.createObjectURL(avatar)}" 
    //       class="avatar" 
    //       alt="Avatar"
    //       height="40" 
    //       width="40" 
    //     >
    //   `
    // } // ngầm hiểu else return undefined

    return avatar && `
      <img
        src="${URL.createObjectURL(avatar)}" 
        class="avatar" 
        alt="Avatar"
        height="40" 
        width="40" 
      >
    `
  }

  document.getElementById('student-list-tbody').innerHTML = students.reduce(function (content, stu) {
    return content += `
      <tr>
        <td class="text-center">
          ${renderAvatar(stu.avatar)}
        </td>
        <td>${stu.studentID}</td>
        <td>${stu.fullname}</td>
        <td>${stu.gender}</td>
        <td>${stu.processScore}</td>
        <td>${stu.finalScore}</td>
        <td>${stu.score10}</td>
        <td>${stu.classification()}</td>
        <td>${stu.passFail}</td>
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
  }, '')
}

function getFormValue () {
  // khởi tạo một instance "studentForm" của đối tượng "FormData" 
  var studentForm = new FormData(document.forms.CreateStudentForm)

  var avatar = studentForm.get('avatar')
  var studentID = studentForm.get('studentID')
  var fullname = studentForm.get('fullname')
  var gender = studentForm.get('gender')
  var processScore = studentForm.get('processScore')
  var processRatio = studentForm.get('processRatio')
  var finalScore = studentForm.get('finalScore')
  var finalRatio = studentForm.get('finalRatio')

  // khởi tạo một instance "student" của đối tượng "Student"
  return new Student(avatar, studentID, fullname, gender, processScore, processRatio, finalScore, finalRatio)
}

function checkValidate(student) {
  var isValid = true

  isValid &= validation.checkEmpty(student.studentID, 'err-id', 'student-ID', 'Không được bỏ trống')
          && validation.checkDuplicate(studentList.array, student.studentID, 'err-id', 'Tới công chiệng luông')

  isValid &= validation.checkLength(student.fullname, 2, 10, 'err-fullname', 'Nhập từ 2-10 ký tự')
          && validation.checkNotNumber(student.fullname, 'err-fullname', 'Chỉ gõ chữ thôi')

  isValid &= validation.checkLength(student.processScore, 0, 2, 'err-process-score', 'Nhập từ 0-10')

  return isValid
}

function resetAvatar () {
  document.querySelector('img.avatar').setAttribute('src', '../../img/default-avatar.png')
}

function createStudent (event) {
  event.preventDefault() // chặn load trang

  var student = getFormValue()

  if (checkValidate(student)) {
    studentList.addToArray(student)
  
    resetAvatar()
    document.forms.CreateStudentForm.reset()
  
    renderStudentList(studentList.array)
  }
}

function removeStudent (studentID) {
  studentList.removeById(studentID)
  renderStudentList(studentList.array)
}

function setFieldValue (fieldName, fieldValue) {
  // document.forms.CreateStudentForm['tiếng Việt'] // document.forms.CreateStudentForm là một Object
  document.forms.CreateStudentForm[fieldName].value = fieldValue
}

function editStudent (studentID) {
  var student = studentList.getById(studentID)

  document.querySelector('img.avatar').setAttribute('src', URL.createObjectURL(student.avatar))
  setFieldValue('studentID', student.studentID)
  setFieldValue('fullname', student.fullname)
  setFieldValue('gender', student.gender)
  setFieldValue('processScore', student.processScore)
  setFieldValue('processRatio', student.processRatio)
  setFieldValue('finalScore', student.finalScore)
  setFieldValue('finalRatio', student.finalRatio)
}

function updateStudent () {
  studentList.updateStudent(getFormValue())
  renderStudentList(studentList.array)
}

// var array = []

// var newArray = array.map(function () {}) // newArray nó sẽ khác địa chỉ với array
// array.forEach(function () {}) // không trả về cái gì hết, trực tiếp chỉnh sửa cho array
