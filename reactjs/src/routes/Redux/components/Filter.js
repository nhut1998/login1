import React from 'react'
import { useDispatch } from 'react-redux'
import { STATUS_FILTER } from '../const'
import { CHANGE_STATUS } from 'store/types/todo'

export default function Filter() {
  const dispatch = useDispatch()

  const onChangeStatus = status => {
    const action = {
      type: CHANGE_STATUS,
      payload: status
    }
    dispatch(action)
  }

  return (
    <div className='d-flex align-items-center justify-content-between'>
      <button className='btn btn-warning' onClick={() => onChangeStatus(STATUS_FILTER.all)}>All</button>
      <button className='btn btn-danger' onClick={() => onChangeStatus(STATUS_FILTER.active)}>Active</button>
      <button className='btn btn-success' onClick={() => onChangeStatus(STATUS_FILTER.complete)}>Complete</button>
    </div>
  )
}
