import app from './app'
import { port } from './config'
import './database'

app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`)
})
