import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { ThemeProvider } from 'styled-components'
import { theme } from './variables/theme'

import App from './components/App/index'
import reducers from './reducers'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.querySelector('#root')
)

if (process.env.NODE_ENV === 'development')
  console.log('Environment:', process.env.NODE_ENV)
