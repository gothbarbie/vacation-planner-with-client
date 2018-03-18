import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { theme } from './variables/theme'

import App from './components/App/index'
import reducers from './reducers'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk)
)

const uri =  '/graphql'

const client = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache(),
  dataIdFromObject: o => o.id,
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </ThemeProvider>,
  document.querySelector('#root')
)

if (process.env.NODE_ENV === 'development')
  console.log('Environment:', process.env.NODE_ENV)
