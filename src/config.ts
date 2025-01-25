import { config } from 'dotenv'

config()
export const port = process.env.PORT || 3500
export const mongodbUri =
  process.env.MONGODB_URI ||
  'mongodb+srv://zobeklol:fLsqLeFBmLGIkgA5@cluster0.jibad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' // We leave the string connection by defect in this case for revision of the tester, in real life this is a bad practice
