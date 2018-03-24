import gql from 'graphql-tag'

export default gql`
  query Auth {
    auth {
      id 
      email
    }
  }
`
