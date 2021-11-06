import React from 'react'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import { STATUS_FILTER } from '../const'

function TodoList({ list, status }) {
  return list.map(item => {
    if (status === STATUS_FILTER.all || status === item.status) {
      return <TodoItem key={item.id} data={item} />
    }
    return null
  })
}

const mapStateToProps = state => { // hàm để lấy cái state trên store xuống làm props cho component
  return {
    list: state.todo.list,
    status: state.todo.status
  }
}

// HOC: Higher Order Component ---> connect
export default connect(mapStateToProps)(TodoList) // closure: research thêm khái niệm này

TodoList.defaultProps = {
  list: []
}
