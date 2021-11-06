function chooseAvatar(event) {
  document.getElementById('avatar').click()
}

// function previewAvatar(event) {
//   const preview = document.querySelector('img.avatar');
//   const file = event.target.files[0]; //cách để lấy file đầu tiên về mảng file
//   const reader = new FileReader();

//   reader.addEventListener("load", function () {
//     // convert image file to base64 string
//     preview.src = reader.result;
//   }, false);

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// }

function previewAvatar(event) {
  
  document.querySelector('img.avatar').setAttribute('src', URL.createObjectURL(event.target.files[0]))
}

document.getElementById('process-ratio').addEventListener('keyup', function (event) {
  var value = event.target.value
  if (value) {
    document.getElementById('final-ratio').value = 100 -value
  }
})

//khởi tại một cía instance "studentList" của đối tượng "StudentList"
var studentList = new StudentList()

function renderStudentList(students) {
  var renderAvatar = function (avatar) {
    return avatar && `
      <img
        class="avatar"
        width="40"
        height="40"
        src="${URL.createObjectURL(avatar)}"
        alt="Avatar"
      >
    `
  }

  document.getElementById('student-list-tbody').innerHTML = students.reduce(function (content, stu) {
    return content +=`
      <tr>
        <td>${renderAvatar(stu.avatar)}</td>
        <td>${stu.studentID}</td>
        <td>${stu.fullname}</td>
        <td>${stu.gender}</td>
        <td>${stu.processScore}</td>
        <td>${stu.finalScore}</td>
        <td>${stu.calcScore10()}</td>
        <td>${stu.classification()}</td>
        <td>${stu.passFail}</td>
        <td>
          <button class="btn btn-danger">
            <i class="fa fa-trash" onclick="removeStudent('${stu.studentID}')"></i>
          </button>
          <button class="btn btn-primary" onclick="editStudent('${stu.studentID}')">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    `
  },'')
}

function createStudent(event) {
  event.preventDefault()
  
  var studentForm = new FormData(document.forms.CreateStudentForm)

  var avatar = studentForm.get('avatar')
  var studentID = studentForm.get('studentID')
  var fullname = studentForm.get('fullname')
  var gender = studentForm.get('gender')
  var processScore = studentForm.get('processScore')
  var processRatio = studentForm.get('processRatio')
  var finalScore = studentForm.get('finalScore')
  var finalRatio = studentForm.get('finalRatio')

  //khởi tạo một instance "student" của đối tượng "Student"
  var student = new Student(avatar, studentID, fullname, gender, processScore, processRatio, finalScore, finalRatio)
  
  studentList.addToArray(student)

  renderStudentList(studentList.array)

  document.forms.CreateStudentForm.reset()
}

function removeStudent(studentID) {
  studentList.removeById(studentID)
  renderStudentList(studentList.array)
}

function removeStudent(studentID) {
  studentList.removeById(studentID)
  renderStudentList(studentList.array)
}

function setFieldValue(fieldName, fieldValue) {
  document.forms.CreateStudentForm[fieldName].value = fieldValue
}

function editStudent(studentID) {
  var student = studentList.getById(studentID)
  console.log(student)
  setFieldValue('avatar', student.avatar)
  setFieldValue('studentID', student.studentID)
  setFieldValue('fullname', student.fullname)
  setFieldValue('gender', student.gender)
  setFieldValue('processScore', student.processScore)
  setFieldValue('processRatio', student.processRatio)
  setFieldValue('finalScore', student.finalScore)
  setFieldValue('finalRatio', student.finalRatio)
}
