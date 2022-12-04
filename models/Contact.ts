import mongoose, { model, Model, Schema } from 'mongoose'

interface Contact {
  email  : string;
  message: string;
  subject: string;
}

const ContactSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
})

export const Contact: Model<Contact> = mongoose.models.contact || model( 'contact', ContactSchema )
