class Question {
  constructor (id, answers) { // es6: class
    this.id = id
    this.answers = answers
  }

  checkExact () {}
}

export default Question

// function Question (id, answers) { // es5: function
//   this.id = id
//   this.answers = answers
// }
