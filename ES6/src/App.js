import { MultipleChoice } from './components/MultipleChoice/index.js'
import { FillBlank } from './components/FillBlank/index.js' // import từ chỗ 'export' (không có default) thì buộc phải giống tên với 'component' đó
import HaroLibrary from './vendors/HaroLibrary.js'

class App extends HaroLibrary { // es6
  state = {
    questionsAscyn: ''
  }

  questions = []

  fetchQuestions () { // lấy dữ liệu từ phía backend
    // fetch('questions.json')
    fetch('https://60cdf85c91cc8e00178dc3cc.mockapi.io/api/v1/questions', { method: 'GET' }) // hàm fetch chính là công cụ để làm việc với Promise
      // .then(function (response) { // viết theo function thường
      //   return response.json()
      // })

      /* arrow function của ES6. Function thường chỉ cần bỏ chữ funciton ở trước và thêm dấu '=>' ở sau sẽ là 'arrow function' 
      * nếu chỉ có một 'parameter' (tham số) có thể bỏ ngoặc tròn. Ví dụ: response => { ...nội dung hàm }
      * nếu nội dung hàm chỉ có 1 dòng return thì bỏ luôn { return... }. Ví dụ response => response.json(). Nghĩa là mình đang return response.json()
      */

      // promise chain
      .then(response => response.json()) // then chính là một higher order function. Thì hàm mà được nhận vào dưới dạng đối số của hàm này là callback function
      .then(questions => { // hàm 'then' chính là lời hứa được thực hiện 
        this.renderQuestions(questions)
      })
      .catch(error => { // hàm 'catch' là thất hứa
        console.log(error)
      })
  }

  renderQuestions (questions = []) { // method. questions = [] --> default parameter
    // for (const question of questions) {}
    // 1. bóc tách phần tử mảng
    // const [,,multipleChoice3] = questions
    // console.log("🚀 ~ file: App.js ~ line 34 ~ App ~ renderQuestions ~ multipleChoice1", multipleChoice1)

    let questionsAscyn = ''

    for (const index in questions) {
      // 2. bóc tách đối tượng (object) thì chỉ quan tâm đúng key --> không cần đúng thứ tự
      const { questionType, id, content, answers } = questions[index] // destructuring: bóc tách phần tử
      questionsAscyn += `<h6 class='mt-3'>Câu ${parseInt(index) + 1}: ${content}</h6>`

      switch (questionType) {
        case 1:
          const multipleChoice = new MultipleChoice(id, answers)
          this.questions.push(multipleChoice)
          questionsAscyn += multipleChoice.render()
          break;

        case 2:
          const fillBlank = new FillBlank(id, answers)
          this.questions.push(fillBlank)
          questionsAscyn += fillBlank.render()
          break;
      
        default:
          break;
      }
    }
    // for (let index = 0; index < questions.length; index++) {
      
    // }
    this.setState({ questionsAscyn }) // object literals
  }

  render () { // method: phương thức
    // tuyệt đối không bao giờ đụng đến 'var' khi khai báo một biến
    const title = 'ES6 - Part 01: Testing online' // constant: hằng số
    const { questionsAscyn } = this.state // tương đương const questionsAscyn = this.state.questionsAscyn

    // console.log('Đồng bộ 1')
    // setTimeout(() => console.log('Bất đồng bộ'), 0) // dù timeout là 0 hay bao nhiêu chăng nữa JS vẫn hiểu nó là hàm bất đồng bộ
    // console.log('Đồng bộ 2')

    document.getElementById('root').innerHTML = `
      <div>
        <h1 class='text-center'>${title}</h1>
        <div class='container pb-5'>
          ${questionsAscyn}
          <button class='btn btn-warning' id='reset'>Làm lại</button>
          <button class='btn btn-success' id='submit'>Nộp bài</button>
          <div class='mt-2'>Bạn trả lời đúng <span id='display-total'>0</span>/${this.questions.length}</div>
        </div>
      </div>
    `

    document.getElementById('reset').addEventListener('click', () => {
      window.scrollTo(0, 0)
      window.location.reload()
    })

    document.getElementById('submit').addEventListener('click', () => {
      document.getElementById('display-total').innerHTML = this.questions.reduce((total, ques) => total += ques.checkExact(), 0)
    })
  }

  componentDidMount () {
    this.fetchQuestions()
  }
}

// xuất instance của đối tượng 'App'
export default new App() // không có constructor

// function App () { // es5
//   this.state = { questionsAscyn: '' } // attribute: thuộc tính
//   this.render = function () { // method: phương thức

//   }
// }
