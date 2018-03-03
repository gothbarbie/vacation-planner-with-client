import { combineReducers } from 'redux'

import authReducer from './authReducer'
import registerReducer from '../views/Register/registerReducer'

export default combineReducers({
  auth: authReducer,
  registerForm: registerReducer,
})
