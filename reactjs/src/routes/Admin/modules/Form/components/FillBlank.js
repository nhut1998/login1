import React from 'react'

export default function FillBlank({ answersByType, setAnswersByType }) {
  const onExactChange = e => {
    let answersClone = [...answersByType]
    answersClone[0].content = e.target.value
    setAnswersByType(answersClone)
  }
  
  return (
    <div className='d-flex align-items-center mb-3'>
      <label style={{ minWidth: 100 }}>Exact</label>
      <input value={answersByType[0].content} onChange={onExactChange} type="text" className="form-control w-25" />
    </div>
  )
}
