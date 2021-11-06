import { FETCH_LIST } from './types'
import api from 'helpers/api'

// async action: action bất đồng bộ
export const fetchList = () => {
  return dispatch => {
    api.get('questions')
      .then(res => {
        dispatch(actFetchList(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const actFetchList = list => ({
  type: FETCH_LIST,
  payload: list
})
