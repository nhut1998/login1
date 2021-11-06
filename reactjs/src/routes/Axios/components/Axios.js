import React, { createElement, useRef, createRef, useState } from 'react'
import FillBlank from './FillBlank'
import MultiChoice from './MultiChoice'

const QUESTION = {
  1: MultiChoice,
  2: FillBlank
}

export default function Axios({ questions }) {
  const [total, setTotal] = useState(0)

  const questionsRef = useRef([])

  if (questionsRef.current.length !== questions.length) {
    questionsRef.current = questions.map((_, i) => questionsRef.current[i] || createRef());
  }

  const submit = () => {
    setTotal(questionsRef.current.reduce((result, ques) => result += ques.current.checkExact(), 0))
  }

  // const renderQuestions = (questionType, id, answers, quesIdx) => {
  //   switch (questionType) {
  //     case 1:
  //       return <MultiChoice id={id} answers={answers} ref={questionsRef.current[quesIdx]} />

  //     case 2:
  //       return <FillBlank id={id} answers={answers} ref={questionsRef.current[quesIdx]} />
    
  //     default:
  //       break;
  //   }
  // }

  return (
    <>
      <div className='text-center display-4 mb-3'>Axios</div>
      <div className='container'>
        {
          questions.map((ques, quesIdx) => {
            const { content, questionType, id, answers } = ques

            return (
              <div key={id}>
                <h6 className='mt-3'>Câu {+quesIdx + 1}: {content}</h6>
                {
                  createElement(QUESTION[questionType], { id, answers, ref: questionsRef.current[quesIdx] })
                }
                {/* {renderQuestions(questionType, id, answers, quesIdx)} */}
              </div>
            )
          })
        }
        <div className='d-flex mt-3'>
          <button className='btn btn-warning me-2'>Làm lại</button>
          <button className='btn btn-success me-2' onClick={submit}>Nộp bài</button>
          <div className='mt-2'>Bạn trả lời đúng {total}/{questions.length}</div>
        </div>
      </div>
    </>
  )
}
