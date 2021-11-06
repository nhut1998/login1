import React, { useCallback, useState } from 'react'
import CommonForm from '../components/CommonForm'
import { QUESTION_TYPE } from '../const'
import { v4 as uuidv4 } from 'uuid'
import api from 'helpers/api'
import { useHistory } from 'react-router-dom'

export function Create() {
  const history = useHistory()
  
  const [data, setData] = useState({
    questionType: QUESTION_TYPE['multiple-choice'].enum,
    answers: {
      [QUESTION_TYPE['multiple-choice'].enum]: Array(4).fill().map(() => ({ id: uuidv4(), content: '', exact: false })),
      [QUESTION_TYPE['fill-in-blank'].enum]: [{ id: uuidv4(), content: '', exact: null }]
    },
    content: ''
  })

  const submit = useCallback(() => {
    const mapping = {
      questionType: data.questionType,
      content: data.content,
      answers: data.answers[data.questionType]
    }

    api.post('questions', mapping)
      .then(res => {
        history.push('/admin/list')
      })
      .catch(err => {
        console.log(err)
      })
  }, [data, history])

  return (
    <>
      <CommonForm
        title='Create'
        data={data}
        setData={newData => { setData({ ...data, ...newData }) }}
        submit={submit}
      />
    </>
  )
}
