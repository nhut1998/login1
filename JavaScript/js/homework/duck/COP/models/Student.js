function Student(avatar, studentID, fullname, gender, processScore, processRatio, finalScore, finalRatio) {
  this.avatar = avatar
  this.studentID = studentID
  this.fullname = fullname
  this.gender = gender
  this.processScore = processScore * 1
  this.processRatio = processRatio * 1
  this.finalScore = finalScore * 1
  this.finalRatio = finalRatio * 1
  this.calcScore10 = function () {
    return (this.processScore  * this.processRatio / 100) + (this.finalScore *  this.finalRatio / 100)
  }
  this.classification = function () {
    var score10= this.calcScore10()

    if (score10 <= 10 && score10 >= 8.5) {
      return "A"
    } else if (score10 < 8.5 && score10 >= 7) {
      return "B"
    } else if (score10 < 7 && score10 >= 5.5) {
      return "C"
    } else if (score10 < 5.5 && score10 >= 4) {
      return "D"
    }
      return "F"
  }
  this.passFail = this.classification() === 'F' ? 'Học Lại Môn' : 'Pass'
  
}
