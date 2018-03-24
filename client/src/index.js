import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'

import { ThemeProvider } from 'styled-components'
import { theme } from './variables/theme'

import App from './components/App/index'

const cache = new InMemoryCache({
  dataIdFromObject: o => o.id,
})

const httpLink = createHttpLink({ uri: '/graphql', credentials: 'same-origin' },)
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
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ThemeProvider>,
  document.querySelector('#root')
)

if (process.env.NODE_ENV === 'development')
  console.log('Environment:', process.env.NODE_ENV)
