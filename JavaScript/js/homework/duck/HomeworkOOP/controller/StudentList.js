function StudentList() {
  this.array = []
  this.addToArray = function (student) {
    this.array.push(student)
  }
  this.removeByName = function (name) {
    var arrayRemoved = this.array.filter(function (student) {
      return student.name !== name
    })
    this.array = arrayRemoved
  }
  this.getByName = function (name) {
    var studentFound = this.array.find(function (student) {
      return student.name === name
    })
    return studentFound
  }
  this.findIndexByName = function (name) {
    return this.array.findIndex(function (stu) {
      return stu.name === name
    })
  }
  this.updateStudent = function (student) {
    var idxFound = this.findIndexByName(student.name)
    if (~idxFound) this.array[idxFound] = student
  }
}