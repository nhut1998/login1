import React, { useCallback } from 'react'
import List from '../components/List'
import { useFetchQuestions } from 'helpers/hooks'
import api from 'helpers/api'

export default function ListContainer() {
  const [questions, setQuestions, fetchQuestions] = useFetchQuestions()

  const remove = useCallback(id => {
    api.delete(`questions/${id}`)
      .then(res => {
        fetchQuestions()
      })
      .catch(err => {
        console.log(err)
      })
  }, [fetchQuestions])

  return (
    <>
      <List questions={questions} setQuestions={setQuestions} remove={remove} />
    </>
  )
}
