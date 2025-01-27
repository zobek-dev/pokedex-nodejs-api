import express, { Application, Request, Response } from 'express'
//@ts-ignore
import apiRoutes from './routes/api.routes'
import morgan from 'morgan'
import cors from 'cors'

const app: Application = express()

//middlewares
app.use(morgan('dev'))
app.use(cors())

//config
app.use(express.json())

// app.use((req: Request, res: Response, next) => {
//   res.header('Access-Control-Allow-Origin', '*') // Allow all origins
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE') // Allow specific methods
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization') // Allow specific headers
//   if (req.method === 'OPTIONS') {
//     return res.status(204).send() // Handle preflight requests
//   }
//   next()
// })

//routes
app.use('/api', apiRoutes)

export default app
