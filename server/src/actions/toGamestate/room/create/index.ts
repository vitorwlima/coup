import { io } from '../../../..'
import { GameState } from '../../../../gameState'
import { defaultGameState } from '../../../../gameState/defaultGameState'
import { GeneralAction } from '../../../index'
import { CreateRoomEventType } from './type'

class CreateRoom extends GeneralAction {
  constructor({ socket, roomId }: GeneralAction) {
    super(socket, roomId)
  }

  public exec(event: CreateRoomEventType) {
    const { socket } = this
    const { name } = event

    const getRandomString = (): string => {
      const length = 6
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

      let result = ''
      for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]

      const roomExists = !!io.sockets.adapter.rooms.get(result)

      if (roomExists) {
        return getRandomString()
      }

      return result
    }

    const roomId = getRandomString()
    socket.join(roomId)

    const gameState = GameState.getInstance(roomId)

    const newPlayer = {
      alive: true,
      cards: [],
      coins: 0,
      ready: false,
      winner: false,
      name,
      socketId: socket.id
    }

    gameState.update({ ...defaultGameState, players: [newPlayer], roomId })
    console.info(`Usuário ${socket.id} criou a sala ${roomId}`)
  }
}

export { CreateRoom }
