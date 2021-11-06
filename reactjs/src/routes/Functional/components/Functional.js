import React, { useState } from 'react'
import TodoItem from './TodoItem'

// this.state = {
//   todotext: ''
// }

// setTodotext = this.setState({ todotext: // newValue })

export default function Functional() {
  const [todotext, setTodotext] = useState('')
  const [list, setList] = useState([])

  const handleChangeInput = event => {
    setTodotext(event.target.value)
    // this.setState({ todotext: event.target.value })
  }

  const addNewTodo = event => {
    if (event.keyCode === 13 && todotext.trim()) { // keyCode = 13 là dấu enter
      const newTodo = {
        id: Date.now(),
        content: todotext
      }
      if (!list.some(item => item.content === todotext)) setList([...list, newTodo])
      setTodotext('')
    }
  }

  const deleteTodo = id => {
    setList(list.filter(item => item.id !== id))
  }

  const editTodo = (id, todotext) => {
    const idxFound = list.findIndex(item => item.id === id)
    if (~idxFound) {
      const listClone = [...list]
      listClone[idxFound].content = todotext
      setList(listClone)
    }
  }

  return (
    <>
      <div className='text-center display-4 mb-5'>Todolist Functional</div>
      <div className='w-25 mx-auto'>
        <input
          className='form-control mb-3'
          onChange={event => handleChangeInput(event)}
          onKeyDown={event => addNewTodo(event)}
          value={todotext}
          placeholder='Enter add a new todo'
        />
        {
          list.map(item => (
            <TodoItem
              key={item.id}
              data={item}
              onDelete={id => deleteTodo(id)}
              // onDelete={deleteTodo}
              onEdit={(id, todotext) => editTodo(id, todotext)}
              // onEdit={editTodo}
            />
          ))
        }
        {/* <input className='form-control' onChange={handleChangeInput('haro')} /> */}
        {/* (event) => handleChangeInput('haro')(event) ---> tới khúc này React sẽ gọi lại callback func của mình sau hàng tá các bước xử của nó (listenner...) */}
      </div>
    </>
  )
}

// currying trong JS: 1 hàm có n tham số => n hàm có 1 tham số
// closure: phỏng vấn JS người ta hay hỏi.

// function tinhTong(a, b) {
//   return a + b
// }

// tinhTong(1, 1)

// // const tinhTongCurrying = a => b => a + b
// function tinhTongCurrying(a) {
//   return function (b) {
//     return a + b
//   }
// }

// const tinhTongChuaToi = tinhTongCurrying(1) === handleChangeInput('haro')(event)
// const tinhTongToiNoiToiChon = tinhTongChuaToi(1)
// console.log(tinhTongToiNoiToiChon)
