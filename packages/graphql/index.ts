import { ApolloServer, gql } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import { connect } from 'mongoose'

import User from './Models/User'

import typeDefs from './schema'
import resolvers from './resolvers'

const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({
  schema,
  context: {
    models: {
      User
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
