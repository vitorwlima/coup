import { GeneralAction } from '../../index'
import { JoinRoomEventType } from './type'

class JoinRoom extends GeneralAction {
  constructor({ socket }: GeneralAction) {
    super(socket)
  }

  public exec(event: JoinRoomEventType) {
    const { socket } = this
    const { roomId } = event

    socket.join(roomId)
    console.info(`Usuário entrou na sala ${roomId}`)
  }
}

export { JoinRoom }
