import { ApolloServer, gql } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import { connect } from 'mongoose'
import jwt from 'jsonwebtoken'

import User from './Models/User'
import Quiz from './Models/Quiz'

import typeDefs from './schema'
import resolvers from './resolvers'

const schema = makeExecutableSchema({ typeDefs, resolvers })

const SECRET_KEY = process.env.JWT_SECRET

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    try {
      const token = (req.headers['authorization'] as string)?.split(' ')[1]
      // verify token with jwt
      const user = jwt.verify(token, SECRET_KEY)
      return {
        models: { User, Quiz },
        user,
        SECRET_KEY
      }
    } catch (error) {
      return {
        models: { User, Quiz },
        user: null,
        SECRET_KEY
      }
    }
  }
})

connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(res => {
    console.log(`[ mongo ] DB connected`)
  })
  .catch(err => {
    throw err
  })

export default server
