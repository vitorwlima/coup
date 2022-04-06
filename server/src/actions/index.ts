import { Socket } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

interface GeneralAction {
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
}

class GeneralAction {
  constructor(socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) {
    this.socket = socket
  }
}

export { GeneralAction }
