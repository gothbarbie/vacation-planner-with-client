import { combineReducers } from 'redux'

import authReducer from '../reducers/authReducer'
import dateReducer from '../reducers/dateReducer'
import flashReducer from '../components/Flash/flashReducer'

export const makeRootReducer = asyncReducers => {
  const appReducer = combineReducers({
    auth: authReducer,
    date: dateReducer,
    flash: flashReducer,
    ...asyncReducers,
  })

  return (state, action) => {
    return appReducer(state, action)
  }
}

export const injectReduer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
