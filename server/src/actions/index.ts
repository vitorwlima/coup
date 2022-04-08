import { Socket } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

import { IGameState } from '../types/IGameState'

interface GeneralAction {
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
  roomId: string
  gameState: IGameState
}

class GeneralAction {
  constructor(
    socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    roomId: string,
    gameState: IGameState
  ) {
    this.socket = socket
    this.roomId = roomId
    this.gameState = gameState
  }
}

export { GeneralAction }
