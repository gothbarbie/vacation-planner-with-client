import gql from 'graphql-tag'

export default gql`
  query auth {
    auth {
      id
      email
    }
  }
`
