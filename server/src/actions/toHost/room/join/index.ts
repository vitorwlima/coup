import { io } from '../../../..'
import { GameState } from '../../../../gameState'
import { Events } from '../../../../types/Events'
import { GeneralAction } from '../../../index'

type JoinRoomEventType = GeneralAction & {
  args: {
    name: string
    roomId: string
  }
}

class JoinRoom extends GeneralAction {
  constructor({ socket, roomId, gameState }: GeneralAction) {
    super(socket, roomId, gameState)
  }

  public exec(event: JoinRoomEventType['args']) {
    const { socket } = this
    const { name, roomId } = event

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

    gameState.emitEvent(Events.NEW_PLAYER_JOINED, newPlayer)
  }
}

export { JoinRoom, JoinRoomEventType }
