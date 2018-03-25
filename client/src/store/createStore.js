import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './reducers'

export default (
  initialState = {},
  hot = module.hot,
  devTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []

  let composeEnhancers = compose

  if (process.env.NODE_ENV !== 'production') {
    if (typeof devTool === 'function') {
      composeEnhancers = devTool
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  )

  store.asyncReducers = {}

  if (hot) {
    hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
