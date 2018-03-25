import gql from 'graphql-tag'

export default gql`
  query GetVacation($id: String!) {
    vacation(id: $id) {
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
