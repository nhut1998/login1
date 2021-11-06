export default class HaroLibrary {
  setState (obj) {
    // vd: { questionsAsync: '123' }
    this.state = { ...this.state, ...obj } // spread operator
    this.render()
  }
  render () {}
}

// this.state = {
//   haro: '',
//   henry: ''
// }

// const stateCloned = { ...this.state, luong: '' }

// let f = s => s[0] !== '}' && !s.split('').reduce((a, n) => n === '{' ? [...a, '{'] : a.slice(0, -1), []).length
