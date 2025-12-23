import cors from 'cors'
import express, { urlencoded } from 'express'
import helmet from 'helmet'
import router from './routes/main'

const server = express()

server.use(
  helmet({
    contentSecurityPolicy: false
  })
)
server.use(
    cors({ 
        origin: process.env.VITE_API_URL, 
        credentials: true 
    }
))
server.use(urlencoded({ extended: true }))
server.use(express.json())
server.use('/api', router)

const port = process.env.SERVER_PORT || 3000
const host = process.env.SERVER_HOST

server.listen(
    port, () => console.log(`Server running: ${host}:${port}`)
)