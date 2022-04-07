import { io } from '../../..'
import { GameState } from '../../../gameState'
import { GeneralAction } from '../../index'
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
    gameState.createPlayer({ socketId: socket.id, name })
    console.info(`Usuário ${socket.id} entrou na sala ${roomId}`)
  }
}

export { JoinRoom }
