import express from 'express'
import router from './routes/main'

// import cors from 'cors'

const server = express()

server.use(express.json())
server.use('/api', router)
// server.use(cors())
server.use('/api', router)

const port = process.env.SERVER_PORT || 3000
const host = process.env.SERVER_HOST

server.listen(
    port, () => console.log(`Server running: ${host}:${port}`)
)