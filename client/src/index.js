import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'

import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'
import { theme } from './variables/theme'

import createStore from './store/createStore'

import App from './components/App/index'

const store = createStore({})

const cache = new InMemoryCache({
  dataIdFromObject: o => o.id,
})

const httpLink = createHttpLink({ uri: '/graphql', credentials: 'same-origin' })
const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: localStorage.getItem('token') || null,
    },
  })
  return forward(operation)
})

const link = middlewareLink.concat(httpLink)

const client = new ApolloClient({
  link,
  cache: cache.restore(window.__APOLLO_STATE__ || {}),
})

console.log('client', client)

if (process.env.NODE_ENV !== 'production') {
  window.__APOLLO_CLIENT__ = client
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </ApolloProvider>,
  document.querySelector('#root')
)

if (process.env.NODE_ENV === 'development')
  console.log('Environment:', process.env.NODE_ENV)
