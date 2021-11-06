import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CHECK_TODO } from 'store/types/todo'
import { STATUS_FILTER } from '../const'

const CHECKED = {
  [STATUS_FILTER.active]: false,
  [STATUS_FILTER.complete]: true
}

export default function TodoItem({ data, onDelete, onEdit }) {
  const [isEdit, setIsEdit] = useState(false)
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const contentData = useRef()

  useEffect(() => {
    if (isEdit) contentData.current.focus()
  }, [isEdit])

  useEffect(() => {
    if (data.content) setText(data.content)
  }, [data.content])

  const onSubmit = () => {
    setIsEdit(false)
    onEdit(data.id, text)
  }

  const onEnterInput = event => {
    if (event.keyCode === 13) onSubmit()
  }

  const onCheck = event => {
    dispatch({
      type: CHECK_TODO,
      payload: {
        id: data.id,
        status: event.target.checked ? STATUS_FILTER.complete : STATUS_FILTER.active
      }
    })
  }

  // const checked = () => {
  //   switch (data.status) {
  //     case STATUS_FILTER.active:
  //       return false
  //     case STATUS_FILTER.complete:
  //       return true
  //     default:
  //       break;
  //   }
  // }

  return (
    <div className='d-flex align-items-center justify-content-between border p-2'>
      <input checked={CHECKED[data.status]} type='checkbox' onChange={onCheck} />
      {
        isEdit
          ? <input
            ref={contentData}
            value={text}
            onChange={e => setText(e.target.value)}
            onBlur={onSubmit}
            onKeyDown={onEnterInput}
            className='form-control mx-2'
          />
          : <div
            className='w-100 mx-3'
            style={{ cursor: 'pointer' }}
            onDoubleClick={() => setIsEdit(true)}>
            {data.content}
          </div>
      }
      <button className='btn btn-danger' onClick={() => onDelete(data.id)}>X</button>
    </div>
  )
}
