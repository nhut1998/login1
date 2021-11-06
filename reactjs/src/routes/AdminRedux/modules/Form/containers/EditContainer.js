import React, { useCallback, useState, useEffect } from 'react'
import CommonForm from '../components/CommonForm'
import { QUESTION_TYPE } from '../const'
import { v4 as uuidv4 } from 'uuid'
import api from 'helpers/api'
import { useHistory, useParams } from 'react-router-dom'

export function Edit() {
  const history = useHistory()
  const params = useParams()
  
  const [data, setData] = useState({
    questionType: QUESTION_TYPE['multiple-choice'].enum,
    answers: {
      [QUESTION_TYPE['multiple-choice'].enum]: Array(4).fill().map(() => ({ id: uuidv4(), content: '', exact: false })),
      [QUESTION_TYPE['fill-in-blank'].enum]: [{ id: uuidv4(), content: '', exact: null }]
    },
    content: ''
  })

  const fetchDetail = useCallback(() => {
    api.get(`questions/${params.id}`)
      .then(res => {
        setData(prevData => ({
          questionType: res.data.questionType,
          answers: { ...prevData.answers, [res.data.questionType]: res.data.answers },
          content: res.data.content,
        }))
      })
      .catch(err => {
        console.log(err)
      })
  }, [params.id])

  useEffect(() => {
    fetchDetail()
  }, [fetchDetail])

  const submit = useCallback(() => {
    const mapping = {
      questionType: data.questionType,
      content: data.content,
      answers: data.answers[data.questionType]
    }

    api.put(`questions/${params.id}`, mapping)
      .then(() => {
        history.push('/admin/list')
      })
      .catch(err => {
        console.log(err)
      })
  }, [data.answers, data.content, data.questionType, history, params.id])

  return (
    <>
      <CommonForm
        title='Edit'
        data={data}
        setData={newData => { setData({ ...data, ...newData }) }}
        submit={submit}
      />
    </>
  )
}
