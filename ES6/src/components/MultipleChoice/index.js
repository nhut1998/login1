import Question from '../Question/index.js'

export class MultipleChoice extends Question { // cách khác để export (ngoài cách export default)
  constructor (...restProps) { // rest parameter: tham số còn lại
    super(...restProps) // kế thừa lại tất cả những thuộc tính và phương thức của 'parent'
  }

  renderChoices () {
    return this.answers.reduce((html, ans) => {
      return html += `
        <div class="form-check">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="ans-${this.id}">
            ${ans.content}
          </label>
        </div>
      `
    }, '')
  }

  checkExact () {
    const inputs = document.querySelectorAll(`input[name="ans-${this.id}"]`)

    let isExact = false

    for (const ansIdx in this.answers) {
      inputs[ansIdx].setAttribute('disabled', true)

      if (this.answers[ansIdx].exact) {
        isExact = inputs[ansIdx].checked 
        inputs[ansIdx].parentElement.classList.add(`text-${isExact ? 'success' : 'danger'}`, 'font-weight-bold')
      }
    }

    return isExact ? 1 : 0
  }

  render () {
    return this.renderChoices()
  }
}
