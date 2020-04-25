import { IUser } from '../Models/User'

export default {
  Query: {
    hello: () => 'Hello world!'
  },

  Mutation: {
    createUser: async (_, { input: { name, email, imageUrl } }, { models }) => {
      const { User } = models
      const user: IUser = new User({ name, email, imageUrl })

      await user.save()

      return await user
    }
  }
}
