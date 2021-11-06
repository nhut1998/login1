import { combineReducers } from 'redux'
import todoReducer from './reducers/todo'
import questionsReducer from '../routes/AdminRedux/redux/reducers'
import userReducer from '../routes/Login/redux/reducers'

export default combineReducers({
  todo: todoReducer,
  questions: questionsReducer,
  user: userReducer,
})
