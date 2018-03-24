import gql from 'graphql-tag'

export default gql`
  mutation {
    login(email: "info@hannasoderstrom.com", password: "password"){
      id
      email
    }
  }
`
