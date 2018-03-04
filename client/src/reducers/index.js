import { combineReducers } from 'redux'

import authReducer from './authReducer'
import flashReducer from '../components/common/Flash/flashReducer'

export default combineReducers({
  auth: authReducer,
  flash: flashReducer,
})
