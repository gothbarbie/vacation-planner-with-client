import gql from 'graphql-tag'

export default gql`
  query getVacations {
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
