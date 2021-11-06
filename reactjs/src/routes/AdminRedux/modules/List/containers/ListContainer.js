import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from '../components/List'
import { fetchList } from '../../../redux/actions'

export default function ListContainer() {
  const dispatch = useDispatch()
  const questions = useSelector(state => state.questions.list)

  useEffect(() => {
    dispatch(fetchList())
  }, [dispatch])

  return (
    <>
      <List questions={questions} />
    </>
  )
}
