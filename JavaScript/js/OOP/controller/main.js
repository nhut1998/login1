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

// khởi tạo một instance "validation" của đối tượng "Validation"
var validation = new Validation()

studentList.array = getLocalStorage('studentList') || []
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

    return avatar && Object.keys(avatar).length !== 0 ? `
      <img
        src="${URL.createObjectURL(avatar)}" 
        class="avatar" 
        alt="Avatar"
        height="40" 
        width="40" 
      >
    ` : ''
  }

  document.getElementById('student-list-tbody').innerHTML = students.reduce(function (content, stu) {
    return content += `
      <tr>
        <td class="text-center">
        <img
          src="https://i.pinimg.com/736x/f4/a3/f6/f4a3f6391eadb5117729519d1b0989ad.jpg" 
          class="avatar" 
          alt="Avatar"
          height="40" 
          width="40" 
        >
        </td>
        <td>${stu.studentID}</td>
        <td>${stu.fullname}</td>
        <td>${stu.gender}</td>
        <td>${stu.processScore}</td>
        <td>${stu.finalScore}</td>
        <td>${stu.score10}</td>
        <td>${stu.classification}</td>
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

function checkValidate (student) {
  var isValid = true

  isValid &= validation.checkEmpty(student.studentID, 'err-id', 'student-ID', 'Không được bỏ trống')
          && validation.checkDuplicateStudentID(studentList.array, student.studentID, 'err-id', 'Bị trùng rồi')

  isValid &= validation.checkLength(student.fullname, 2, 10, 'err-fullname', 'Nhập từ 2 -> 10')
          && validation.checkNotNumber(student.fullname, 'err-fullname', 'Chỉ nhập chữ thôi')

  isValid &= validation.checkLength(student.processScore, 0, 3, 'err-process-score', 'Nhập điểm cho đàng hoàng')

  return isValid
}

function resetAvatar () {
  document.querySelector('img.avatar').setAttribute('src', '../../img/default-avatar.png')
}

function createStudent (event) {
  event.preventDefault() // chặn load trang

  var student = getFormValue()

  if (checkValidate(student)) { // check validate khi submit
    student.calcClassification()
    studentList.addToArray(student)
  
    resetAvatar()
    document.forms.CreateStudentForm.reset()

    setLocalStorage('studentList', studentList.array)
  
    renderStudentList(studentList.array)
  }
}

function removeStudent (studentID) {
  studentList.removeById(studentID)
  setLocalStorage('studentList', studentList.array)
  renderStudentList(studentList.array)
}

function setFieldValue (fieldName, fieldValue) {
  // document.forms.CreateStudentForm['tiếng Việt'] // document.forms.CreateStudentForm là một Object
  document.forms.CreateStudentForm[fieldName].value = fieldValue
}

function editStudent (studentID) {
  var student = studentList.getById(studentID)

  // document.querySelector('img.avatar').setAttribute('src', URL.createObjectURL(student.avatar))
  setFieldValue('studentID', student.studentID)
  setFieldValue('fullname', student.fullname)
  setFieldValue('gender', student.gender)
  setFieldValue('processScore', student.processScore)
  setFieldValue('processRatio', student.processRatio)
  setFieldValue('finalScore', student.finalScore)
  setFieldValue('finalRatio', student.finalRatio)
}

function updateStudent () {
  var student = getFormValue()
  student.calcClassification()
  studentList.updateStudent(student)
  setLocalStorage('studentList', studentList.array)
  renderStudentList(studentList.array)
}

// var array = []

// var newArray = array.map(function () {}) // newArray nó sẽ khác địa chỉ với array
// array.forEach(function () {}) // không trả về cái gì hết, trực tiếp chỉnh sửa cho array

function searchByFullname (event) {
  var searchResult = studentList.searchByFullname(event.target.value)
  renderStudentList(searchResult) // công dụng khi viết hàm renderStudentList truyền vào đối số động chứ không phải xét cứng là studentList.array
}
