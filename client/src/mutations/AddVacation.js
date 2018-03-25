import gql from 'graphql-tag'

export default gql`
  mutation AddVacation(
    $author: String!
    $arrival: String!
    $departure: String!
    $people: [String]!
  ) {
    addVacation(
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
