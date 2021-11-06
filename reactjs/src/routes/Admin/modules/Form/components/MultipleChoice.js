import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function MultipleChoice({ answersByType, setAnswersByType }) {
  const onNumberChange = e => {
    let answersClone = [...answersByType]
    const { value } = e.target
    if (value > 0 && value < 10) {
      const subtract = value - answersClone.length
      for (let i = 0; i < Math.abs(subtract); i++) {
        if (answersClone.length < value) {
          answersClone.push({ id: uuidv4(), content: '', exact: false })
        } else {
          answersClone.pop()
        }
      }
    }
    setAnswersByType(answersClone)
  }

  const onContentChange = (value, itemId) => {
    let answersClone = [...answersByType]
    const idxFound = answersClone.findIndex(item => item.id === itemId)
    answersClone[idxFound].content = value
    setAnswersByType(answersClone)
  }

  const onExactChange = itemId => {
    let answersClone = [...answersByType]
    answersClone.forEach(item => {
      item.exact = item.id === itemId // boolean
    })
    setAnswersByType(answersClone)
  }

  return (
    <>
      <div className='d-flex align-items-center mb-3'>
        <label style={{ minWidth: 100 }}>Number</label>
        <input
          value={answersByType.length}
          type="number"
          className="form-control w-25"
          onChange={onNumberChange}
        />
      </div>
      <div className='d-flex mb-3'>
        <label style={{ minWidth: 100 }} className='pt-2'>Exact</label>
        <div>
          {
            answersByType.map(item => (
              <div key={item.id} className="d-flex align-items-center mb-3">
                <input
                  checked={item.exact}
                  className="form-check-input me-2"
                  type="radio"
                  name="flexRadioDefault"
                  onChange={() => onExactChange(item.id)}
                />
                <input
                  value={item.content}
                  className="form-control"
                  type='text'
                  onChange={e => onContentChange(e.target.value, item.id)}
                />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
