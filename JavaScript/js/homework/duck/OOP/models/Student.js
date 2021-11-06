function Student (avatar, studentID, fullname, gender, processScore, processRatio, finalScore, finalRatio) {
  this.avatar = avatar
  this.studentID = studentID
  this.fullname = fullname
  this.gender = gender
  this.processScore = processScore * 1
  this.processRatio = processRatio * 1
  this.finalScore = finalScore * 1
  this.finalRatio = finalRatio * 1
  this.score10 = (this.processScore * this.processRatio / 100) + (this.finalScore * this.finalRatio / 100)
  this.classification = function () { // method: phương thức
    if (this.score10 <= 10 && this.score10 >= 8.5) {
      return 'A'
    } else if (this.score10 < 8.5 && this.score10 >= 7) {
      return 'C'
    } else if (this.score10 < 7 && this.score10 >= 5.5) {
      return 'C'
    } else if (this.score10 < 5.5 && this.score10 >= 4) {
      return 'D'
    }
    return 'F'
  }
  this.passFail = this.classification() === 'F' ? 'fail' : 'pass'
}
 