import gql from 'graphql-tag'

export default gql`
  query vacation($id: String ) {
    vacation (id: $id) {
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
