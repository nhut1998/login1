import React from 'react'
import './App.css'
import Header from './layouts/Header/components/Header'
import Todolist from './routes/TodoList/components/Todolist'





export default class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Todolist />
      </div>
    )
  }
}





