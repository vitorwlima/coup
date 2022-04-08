import { Server } from 'socket.io'
import http from 'http'

import { JoinRoom, JoinRoomEventType } from './actions/toHost/room/join'
import {
  UpdatePlayerList,
  UpdatePlayerListEventType
} from './actions/toGamestate/room/updatePlayerList'
import { CreateRoom, CreateRoomEventType } from './actions/toGamestate/room/create'
import { Events } from './types/Events'

const runSocket = (server: http.Server) => {
  const io = new Server(server, { cors: { origin: process.env.ORIGIN } })

  io.on('connection', socket => {
    socket.on(Events.JOIN_ROOM, ({ roomId, gameState, args }: JoinRoomEventType) =>
      new JoinRoom({ socket, roomId, gameState }).exec(args)
    )

    socket.on(Events.CREATE_ROOM, ({ roomId, gameState, args }: CreateRoomEventType) =>
      new CreateRoom({ socket, roomId, gameState }).exec(args)
    )
    socket.on(
      Events.UPDATE_PLAYER_LIST,
      ({ roomId, gameState, args }: UpdatePlayerListEventType) => {
        new UpdatePlayerList({ socket, roomId, gameState }).exec(args)
      }
    )
  })

  return { io }
}

export { runSocket }
