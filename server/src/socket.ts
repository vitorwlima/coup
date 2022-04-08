import { Server } from 'socket.io'
import http from 'http'

import { JoinRoom } from './actions/toHost/room/join'
import { JoinRoomEventType } from './actions/toHost/room/join/type'
import { UpdatePlayerListEventType } from './actions/toGamestate/room/updatePlayerList/type'
import { UpdatePlayerList } from './actions/toGamestate/room/updatePlayerList'
import { CreateRoom } from './actions/toGamestate/room/create'
import { CreateRoomEventType } from './actions/toGamestate/room/create/type'

const runSocket = (server: http.Server) => {
  const io = new Server(server, { cors: { origin: process.env.ORIGIN } })

  io.on('connection', socket => {
    socket.on('join-room', (event: JoinRoomEventType) =>
      new JoinRoom({ socket, roomId: event.roomId }).exec(event)
    )
    socket.on('create-room', (event: CreateRoomEventType) =>
      new CreateRoom({ socket, roomId: event.roomId }).exec(event)
    )
    socket.on('update-player-list', (event: UpdatePlayerListEventType) => {
      new UpdatePlayerList({ socket, roomId: event.roomId }).exec(event)
    })
  })

  return { io }
}

export { runSocket }
