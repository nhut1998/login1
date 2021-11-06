var stu = new Student('','3116500008', 'Bui Dinh Viet Duc', 'Male', )

function StudentList() {
  this.array = []  //adtribute: thuộc tính
  this.addToArray = function (student) { //method: phương thức
    this.array.push(student)
  }
  this.removeById = function (studentID) {
    var arrayRemoved = this.array.filter(function (student) {
      return student.studentID !== studentID
    })
    this.array = arrayRemoved
  }
  this.getById = function (studentID) {
    var studentFound = this.array.find(function (student) {
      return student.studentID === studentID
    })
    return studentFound
  }
}
