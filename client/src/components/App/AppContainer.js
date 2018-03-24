import React from 'react'
import { hot } from 'react-hot-loader'

import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { theme } from '../../variables/theme'
import client from '../../store/graphQL'
import App from './App'

import createStore from '../../store/createStore'

const store = createStore()

const AppContainer = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Route component={App} path="/" />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

if (process.env.NODE_ENV === 'development')
  console.log('Environment:', process.env.NODE_ENV)

export default hot(module)(AppContainer)
