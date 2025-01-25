import mongoose from 'mongoose'
import { mongodbUri } from './config'

const connectToDatabase = async () => {
  try {
    const db = await mongoose.connect(mongodbUri, {})
    console.log('Connected to', db.connection.name)

    // Setup mongoose connection event listeners
    mongoose.connection.on('connected', () => {
      console.log('Mongoose is connected')
    })

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose is disconnected')
    })
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

connectToDatabase()
