import { combineReducers } from 'redux'

import authReducer from './authReducer'
import flashReducer from '../components/Flash/flashReducer'

export default combineReducers({
  auth: authReducer,
  flash: flashReducer,
})
