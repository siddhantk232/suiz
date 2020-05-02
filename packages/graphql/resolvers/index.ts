import { AuthenticationError } from 'apollo-server-express'
import jwt from 'jsonwebtoken'

import { IQuiz } from '../Models/Quiz'
import { IUser } from '../Models/User'

export default {
  Query: {
    quizzes: async (_, __, { models }) => {
      const { Quiz } = models

      const quizzes: IQuiz = await Quiz.find().populate('createdBy')
      return quizzes
    }
  },

  Mutation: {
    createUser: async (
      _,
      { name, email, imageUrl },
      { models, SECRET_KEY }
    ) => {
      const { User } = models
      // check if the user exists
      const user: IUser = await User.findOne({ email })

      if (user) {
        const token = jwt.sign(
          { name: user.name, email: user.email, id: user.id },
          SECRET_KEY,
          { expiresIn: '1y' }
        )

        return { ...user, token, id: user.id }
      }

      const newUser: IUser = new User({ name, email, imageUrl })

      await newUser.save()

      const token = jwt.sign(
        { name: user.name, email: user.email, id: newUser.id },
        SECRET_KEY,
        { expiresIn: '1y' }
      )

      return { ...newUser, token, id: user.id }
    },

    createQuiz: async (_, { input: { name, questions } }, { models, user }) => {
      if (!user)
        return new AuthenticationError(
          'You are not authenticated to use this service'
        )

      const { Quiz } = models
      const quiz: IQuiz = new Quiz({
        name,
        questions,
        createdBy: user.id
      })

      await quiz.save()
      const res = await quiz.populate('createdBy')

      return res
    }
  }
}
