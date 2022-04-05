import { GeneralAction } from '../../index'
import { JoinRoomEventType } from './type'

class JoinRoom extends GeneralAction {
  constructor({ socket }: GeneralAction) {
    super(socket)
  }

  public exec(event: JoinRoomEventType) {
    console.log('meu evento para entrar na sala foi: ', event)
  }
}

export { JoinRoom }
