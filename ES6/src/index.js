// nhập instance của đối tượng 'App'
import app from './App.js' // import từ chỗ 'export default' thì không nhất thiết phải giống tên với 'component' đó

// life cycle: vòng đời của 'app'
app.render() // render giao diện lần đầu (mount)
app.componentDidMount() // luôn luôn chạy thằng này sau render
