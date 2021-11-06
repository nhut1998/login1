import React, { useState, useRef, useEffect } from 'react'

export default function TodoItem({ data, onDelete, onEdit }) { // destructuring object "props"
  // const { data, onDelete } = props

  const [isEdit, setIsEdit] = useState(false)
  const [text, setText] = useState('')

  const contentData = useRef()

  // useEffect = 3 lifecycle: didMount, didUpdate, unmount nếu như là class

  // useEffect(() => {
  //   console.log('didMount ngay lần đầu + didUpdate khi có setState')
  //   return () => {
  //     console.log('unmount')
  //   }
  // })

  // useEffect(() => {
  //   console.log('didMount')
  // }, []) // không có dependencies

  // useEffect(() => {
  //   console.log('didMount ngay lần đầu + didUpdate dựa vào dependencies')
  // }, [isEdit]) // isEdit là một trong những dependencies

  useEffect(() => {
    if (isEdit) contentData.current.focus()
  }, [isEdit]) // isEdit là một trong những dependencies

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

  return (
    <div className='d-flex align-items-center justify-content-between border p-2'>
      <input type='checkbox' />
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
