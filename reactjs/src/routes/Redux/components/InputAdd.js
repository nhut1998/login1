import React, { useState } from 'react'
import { connect } from 'react-redux'
import { STATUS_FILTER } from '../const'
import { ADD_TODO } from 'store/types/todo'

function InputAdd({ actAddNewTodo }) {
  const [todotext, setTodotext] = useState('')

  const addNewTodo = event => {
    if (event.keyCode === 13 && todotext.trim()) {
      const newTodo = {
        id: Date.now(),
        content: todotext,
        status: STATUS_FILTER.active
      }
      actAddNewTodo(newTodo)
      setTodotext('')
    }
  }

  return (
    <input
      value={todotext}
      className='form-control mb-3'
      onKeyDown={addNewTodo}
      onChange={e => setTodotext(e.target.value)}
      placeholder='Enter add a new todo'
    />
  )
}

const mapDispatchToProps = dispatch => {
  return {
    actAddNewTodo: newTodo => {
      const action = {
        type: ADD_TODO,
        payload: newTodo
      }
      dispatch(action)
    },
  }
}

export default connect(undefined, mapDispatchToProps)(InputAdd)
