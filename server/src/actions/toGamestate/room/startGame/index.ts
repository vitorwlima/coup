import { io } from '../../../..'
import { GameState } from '../../../../gameState'
import { defaultGameState } from '../../../../gameState/defaultGameState'
import { GeneralAction } from '../../../index'

type StartGameEventType = GeneralAction & {
  args: {}
}

class StartGame extends GeneralAction {
  constructor({ socket, roomId, gameState }: GeneralAction) {
    super(socket, roomId, gameState)
  }

  public exec() {
    const { socket, gameState, roomId } = this

    const gameStateInstance = GameState.getInstance(roomId)

    gameStateInstance.update({ ...gameState, state: 'ingame' })
    console.info(`Usuário ${socket.id} iniciou o jogo`)
  }
}

export { StartGame, StartGameEventType }
