import express, { Request } from 'express'
import { Server } from 'socket.io'

interface ServerToClientEvents {
  request: (req: Request) => void;
}

const app = express()
const io = new Server<{}, ServerToClientEvents>()

app.use(express.json())

io.on('connection', socket => {
  app.use(request => socket.emit('request', request))
})

