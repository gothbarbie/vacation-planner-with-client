import { combineReducers } from 'redux'

import authReducer from './authReducer'
import dateReducer from './dateReducer'
import flashReducer from '../components/Flash/flashReducer'

export default combineReducers({
  auth: authReducer,
  date: dateReducer,
  flash: flashReducer,
})
