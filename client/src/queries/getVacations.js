import gql from 'graphql-tag'

export default gql`
  query GetVacations {
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
