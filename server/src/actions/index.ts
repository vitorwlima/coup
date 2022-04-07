import { Socket } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

interface GeneralAction {
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
  roomId: string
}

class GeneralAction {
  constructor(socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, roomId: string) {
    this.socket = socket
    this.roomId = roomId
  }
}

export { GeneralAction }
