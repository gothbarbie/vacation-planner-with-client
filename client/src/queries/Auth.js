import gql from 'graphql-tag'

export default gql`
  query {
    auth {
      id 
      email
    }
  }
`
