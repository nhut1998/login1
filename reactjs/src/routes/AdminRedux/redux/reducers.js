import { FETCH_LIST, FETCH_DETAIL, CREATE, UPDATE, DELETE } from './types'
import { QUESTION_TYPE } from '../modules/Form/const'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  list: [],
  data: {
    questionType: QUESTION_TYPE['multiple-choice'].enum,
    answers: {
      [QUESTION_TYPE['multiple-choice'].enum]: Array(4).fill().map(() => ({ id: uuidv4(), content: '', exact: false })),
      [QUESTION_TYPE['fill-in-blank'].enum]: [{ id: uuidv4(), content: '', exact: null }]
    },
    content: ''
  }
}

export default function adminReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_LIST: {
      return { ...state, list: payload }
    }

    default:
      return state
  }
}
