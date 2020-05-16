import { AuthenticationError } from 'apollo-server-express'
import jwt from 'jsonwebtoken'

import { IQuiz } from '../Models/Quiz'
import { IUser } from '../Models/User'

export default {
  Query: {
    quizzes: async (_, __, { models, user }) => {
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
        const resp = { ...user._doc, token, id: user.id }

        return resp
      }

      const newUser: IUser = new User({ name, email, imageUrl })

      const token = jwt.sign(
        { name: user.name, email: user.email, id: newUser.id },
        SECRET_KEY,
        { expiresIn: '1y' }
      )

      const resp = { ...newUser._doc, token, id: user.id }

      return resp
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
