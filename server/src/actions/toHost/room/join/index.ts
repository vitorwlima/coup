import { io } from '../../../..'
import { GameState } from '../../../../gameState'
import { GeneralAction } from '../../../index'
import { JoinRoomEventType } from './type'

class JoinRoom extends GeneralAction {
  constructor({ socket, roomId }: GeneralAction) {
    super(socket, roomId)
  }

  public exec(event: JoinRoomEventType) {
    const { socket, roomId } = this
    const { name } = event

    const roomExists = !!io.sockets.adapter.rooms.get(roomId)

    if (!roomExists) {
      console.info(`Usuário ${socket.id} NÃO entrou na sala ${roomId} - código incorreto`)
      throw new Error('Código incorreto.')
    }

    const gameState = GameState.getInstance(roomId)
    socket.join(roomId)

    const newPlayer = {
      alive: true,
      cards: [],
      coins: 0,
      ready: false,
      winner: false,
      socketId: socket.id,
      name
    }

    gameState.emitEvent('new-player-joined', newPlayer)
  }
}

export { JoinRoom }
