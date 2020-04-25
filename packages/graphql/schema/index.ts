import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    hello: String!
  }

  input userInput {
    name: String!
    email: String!
    imageUrl: String!
  }

  type User {
    id: ID
    name: String
    imageUrl: String
    email: String
  }

  type Mutation {
    createUser(input: userInput!): User
  }
`

export default typeDefs
