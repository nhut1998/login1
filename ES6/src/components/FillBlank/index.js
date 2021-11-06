import Question from '../Question/index.js'

export class FillBlank extends Question { // cách khác để export (ngoài cách export default)
  constructor (...restProps) { // rest parameter: tham số còn lại
    // console.log(restProps) // ---> khi log ra thì 'rest parameter' nó sẽ gom lại thành 1 mảng
    super(...restProps) // kế thừa lại tất cả những thuộc tính và phương thức của 'parent'
  }

  render () {
    return `
      <div class="form-group">
        <input type="text" class="form-control" id="ans-${this.id}" placeholder="Nhập đáp án">
      </div>
    `
  }

  checkExact () {
    return 0
  }
}
