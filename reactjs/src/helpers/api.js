import axios from './axios'

const API_V1 = 'api/v1/'

function callAPI ({ uri, ver }, method, body = {}) {
  let config = { url: ver + uri, method }
  if (method !== 'get') config.data = body
  return axios(config)
}

const api = (ver = API_V1) => ({
  get: uri => callAPI({ uri, ver }, 'get'),
  post: (uri, body) => callAPI({ uri, ver }, 'post', body),
  put: (uri, body) => callAPI({ uri, ver }, 'put', body),
  delete: uri => callAPI({ uri, ver }, 'delete')
})

export default api()
