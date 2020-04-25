import gql from 'graphql-tag'

export const CREATE_USER = gql`
  mutation CreateUser($input: userInput!) {
    createUser(input: $input) {
      name
      email
      imageUrl
    }
  }
`
