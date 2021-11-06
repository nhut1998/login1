import { LOGIN } from './types'
import axios from 'helpers/axios'

// async action: action bất đồng bộ
export const login = (userInfo, history, setSubmitting) => {
  return dispatch => {
    axios.post('api/QuanLyNguoiDung/DangNhap', userInfo)
      .then(res => {
        dispatch(actLogin(res.data))
        localStorage.setItem('access_token', res.data.accessToken)
        axios.defaults.headers["Authorization"] = `Bearer ${res.data.accessToken}`
        history.push('/')
      })
      .catch(err => {
        alert('Sai gì đó rồi')
      })
      .finally(() => {
        setSubmitting(false)
      })
  }
}

export const actLogin = credential => ({
  type: LOGIN,
  payload: credential
})
