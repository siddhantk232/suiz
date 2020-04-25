import { Schema, model, Document } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  imageUrl: string
}

const userSchema: Schema = new Schema({
  name: String,
  email: String,
  imageUrl: String
})

export default model<IUser>('User', userSchema)
