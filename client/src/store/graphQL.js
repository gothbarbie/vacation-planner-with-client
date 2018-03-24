import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-cache-inmemory'

import {
  localStorageHelperGet,
  localStorageHelperRemove,
} from '../utils/localStorage'
import { redirect } from '../utils/redirect'

export const handleErrors = ({ networkError }) => {
  if (networkError && networkError.statusCode === 503) {
    console.error(503)
  }
}

const httpLink = createHttpLink({ uri: `http://localhost:3000/graphql` })

export function deconstructJWT (token) {
  const segments = token.split('.')

  if (!segments instanceof Array || segments.length !== 3) {
    throw new Error('Invalid JWT')
  }

  return JSON.parse(decodeURIComponent(escape(window.atob(segments[1]))))
}

export const handleToken = (operation, forward) => {
  // IntrospectionQuery is sent by Apollo DevTools to
  // get the schema of our API. If we don't have a token and
  // open the DevTools it'll redirect to the start page.
  const unprotectedOperations = ['IntrospectionQuery', 'login']

  if (unprotectedOperations.includes(operation.operationName)) {
    return forward(operation)
  }

  const token = localStorageHelperGet('token')

  // Redirect to login if no token
  if (!token) {
    // redirect('/') // TODO: Fix this redirect as it causes an infinite loop

    return forward(operation)
  }

  // Check if token has expired
  const tokenExpires = deconstructJWT(token).exp

  if (Date.now() - tokenExpires * 1000 > 0) {
    localStorageHelperRemove('token')
    redirect('/')

    return forward(operation)
  }

  return forward(operation)
}


export const dataIdFromObject = r => {
  if (r.path && r.__typename) {
    return `${r.__typename}:${r.path}`
  }

  if (r.id && r.__typename) {
    return `${r.__typename}:${r.id}`
  }

  return null
}


const link = ApolloLink.from([
  new ApolloLink(handleToken),
  onError(handleErrors),
  httpLink,
])


const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    dataIdFromObject,
  }).restore(window.__APOLLO_STATE__),
})


export default client
