import { useState, useEffect, useCallback } from 'react'
import api from 'helpers/api'

export function useFetchQuestions() {
  const [questions, setQuestions] = useState([])

  const fetchQuestions = useCallback(() => {
    api.get('questions')
      .then(res => {
        setQuestions(res.data)
      })
  }, [])

  useEffect(() => { fetchQuestions() }, [fetchQuestions])

  return [questions, setQuestions, fetchQuestions]
}

// export const haro = 'haro'
