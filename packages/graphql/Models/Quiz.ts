import { Schema, Document, model } from 'mongoose'
import { IUser } from './User'

export interface IQuiz extends Document {
  name: string
  questions: [
    {
      question: string
      options: [string]
      answer: string
    }
  ]
  createdBy: IUser
}

const quizSchema = new Schema(
  {
    name: String,
    questions: [
      {
        question: String,
        time: Number, // time alloted for each question in seconds
        options: [String],
        answer: String
      }
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)

export default model<IQuiz>('Quiz', quizSchema)
