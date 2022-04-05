import { Server } from 'socket.io'
import http from 'http'
import { JoinRoom } from './actions/room/join'
import { JoinRoomEventType } from './actions/room/join/type'

const runSocket = (server: http.Server) => {
  const io = new Server(server, { cors: { origin: process.env.ORIGIN } })

  io.on('connection', socket => {
    console.log({ socket })
    socket.on('join-room', (event: JoinRoomEventType) => new JoinRoom({ socket }).exec(event))
  })
}

export { runSocket }
