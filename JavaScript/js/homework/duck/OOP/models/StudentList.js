function StudentList () {
  this.array = [] // attribute: thuộc tính
  this.addToArray = function (student) { // method: phương thức
    this.array.push(student)
  }
  this.removeById = function (studentID) {
    var arrayRemoved = this.array.filter(function (student) {
      return student.studentID !== studentID // return điều kiện lọc
    })
    this.array = arrayRemoved
  }
  this.getById = function (studentID) {
    var studentFound = this.array.find(function (student) {
      return student.studentID === studentID
    })
    return studentFound
  }
  this.findIndexById = function (studentID) {
    return this.array.findIndex(function (stu) {
      return stu.studentID === studentID
    })
  }
  this.updateStudent = function (student) {
    var idxFound = this.findIndexById(student.studentID)
    if (~idxFound) this.array[idxFound] = student // ~ bù 2 --> check >= 1 --> true, 0 --> 
    // nếu không tìm thấy idxFound = -1 --> ~idxFound = 0 --> false
  }
}

// Hảo --> 3116500009 !== 3116500070 --> đẩy vô arrayRemoved
// Thiện --> 3116500045 !== 3116500070 --> đẩy vô arrayRemoved
// Nhựt
// --> Kiên: 3116500070 --> điều kiện bị sai --> sẽ không đc đẩy vô mảng arrayRemoved
// Đức
 