import { Server } from 'socket.io'
import http from 'http'

import { JoinRoom, JoinRoomEventType } from './actions/toHost/room/join'
import {
  UpdatePlayerList,
  UpdatePlayerListEventType
} from './actions/toGameState/room/updatePlayerList'
import { CreateRoom, CreateRoomEventType } from './actions/toGameState/room/create'
import { Events } from './types/Events'
import { SwitchReady, SwitchReadyEventType } from './actions/toGameState/player/switchReady'
import { StartGame, StartGameEventType } from './actions/toGameState/room/startGame'

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
    socket.on(Events.START_GAME, ({ roomId, gameState }: StartGameEventType) => {
      new StartGame({ socket, roomId, gameState }).exec()
    })

    socket.on(Events.SWITCH_READY, ({ roomId, gameState }: SwitchReadyEventType) => {
      new SwitchReady({ socket, roomId, gameState }).exec()
    })
  })

  return { io }
}

export { runSocket }
