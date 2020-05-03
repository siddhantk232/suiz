import { gql } from 'apollo-server-express'

const typeDefs = gql`
  input userInput {
    name: String!
    email: String!
    imageUrl: String!
  }

  input inputQuestion {
    question: String!
    options: [String!]!
    answer: String!
    time: Int!
  }

  input quizInput {
    name: String
    questions: [inputQuestion]
  }

  type User {
    id: ID!
    name: String!
    imageUrl: String!
    email: String!
    token: String!
  }

  type Question {
    question: String!
    options: [String!]!
    answer: String!
    time: Int!
  }

  type Quiz {
    id: ID!
    name: String!
    questions: [Question!]!
    createdBy: User!
  }

  type Query {
    quizzes: [Quiz]!
  }

  type Mutation {
    createUser(email: String!, name: String!, imageUrl: String!): User!
    createQuiz(input: quizInput!): Quiz!
  }
`

export default typeDefs
