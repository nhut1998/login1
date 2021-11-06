import React from 'react'
import InputAdd from './InputAdd'
import TodoList from './TodoList'
import Filter from './Filter'

export default function Redux() {
  return (
    <>
      <div className='text-center display-4 mb-5'>Todolist Redux</div>
      <div className='w-25 mx-auto'>
        <div className='mb-3'>
          <Filter />
        </div>
        <InputAdd />
        <TodoList />
      </div>
    </>
  )
}
