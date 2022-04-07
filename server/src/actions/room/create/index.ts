import { io } from '../../..'
import { GameState } from '../../../gameState'
import { GeneralAction } from '../../index'
import { CreateRoomEventType } from './type'

class CreateRoom extends GeneralAction {
  constructor({ socket, roomId }: GeneralAction) {
    super(socket, roomId)
  }

  public exec(event: CreateRoomEventType) {
    const { socket } = this
    const { name } = event

    const getRandomString = (length: number, chars: string) => {
      let result = ''
      for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
      return result
    }

    const roomId = getRandomString(6, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')

    const gameState = GameState.getInstance(roomId)

    socket.join(roomId)
    gameState.createFirstPlayer({ socketId: socket.id, name, roomId })
    console.info(`Usuário ${socket.id} entrou na sala ${roomId}`)
  }
}

export { CreateRoom }
