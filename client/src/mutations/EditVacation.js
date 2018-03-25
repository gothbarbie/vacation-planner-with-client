import gql from 'graphql-tag'

export default gql`
  mutation EditVacation(
    $author: String!
    $arrival: String!
    $departure: String!
    $people: [String]!
  ) {
    editVacation(
      author: $author
      arrival: $arrival
      departure: $departure
      people: $people
    ) {
      id
      arrival
      departure
      people
    }
  }
`
