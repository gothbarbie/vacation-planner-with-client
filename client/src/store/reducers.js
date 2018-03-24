import { combineReducers } from 'redux'

import loadingIndicatorReducer from './loadingIndicator'

export const makeRootReducer = asyncReducers => {
  const appReducer = combineReducers({
    loadingIndicator: loadingIndicatorReducer,
    ...asyncReducers,
  })

  return (state, action) => {
    return appReducer(state, action)
  }
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
