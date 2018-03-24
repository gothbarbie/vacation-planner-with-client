import gql from 'graphql-tag'

export default gql`
  query vacations {
    vacations {
      id
      arrival
      departure
      people
      author {
        id
      }
    }
  }
`
