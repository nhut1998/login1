import { STATUS_FILTER } from 'routes/Redux/const'
import { ADD_TODO, CHANGE_STATUS, CHECK_TODO } from '../types/todo'

const initialState = {
  list: [],
  status: STATUS_FILTER.all // ['all', 'active', 'complete']
}

export default function todoReducer(state = initialState, { type, payload }) {
  switch (type) {
    // tên type phải unique trên toàn app
    case ADD_TODO: {
      const listClone = [...state.list]
      if (!listClone.some(item => item.content === payload.content)) {
        listClone.push(payload)
      }
      return { ...state, list: listClone }
    }

    case CHANGE_STATUS: {
      return { ...state, status: payload }
    }

    case CHECK_TODO: {
      const listClone = [...state.list]
      const idxFound = listClone.findIndex(item => item.id === payload.id)
      listClone[idxFound].status = payload.status
      return { ...state, list: listClone }
    }

    default:
      return state
  }
}
