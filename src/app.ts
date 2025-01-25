import express, { Application } from 'express'
//@ts-ignore
import apiRoutes from './routes/api.routes'
import morgan from 'morgan'
import cors from 'cors'

const corsOptions = {
  origin: '*', //available origins
  methods: 'GET,POST,PUT,DELETE',
}

const app: Application = express()

//config
app.use(express.json())

//middlewares
app.use(morgan('dev'))
app.use(cors(corsOptions))

//routes
app.use('/api', apiRoutes)

export default app
