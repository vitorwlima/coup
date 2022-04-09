import { GeneralAction } from '../../..'
import { GameState } from '../../../../gameState'

type SwitchReadyEventType = GeneralAction & {}

class SwitchReady extends GeneralAction {
  constructor({ socket, roomId, gameState }: GeneralAction) {
    super(socket, roomId, gameState)
  }

  public exec() {
    const { socket, roomId, gameState: currentGameState } = this

    const gameState = GameState.getInstance(roomId)
    const newGameState = {
      ...currentGameState,
      players: currentGameState.players.map(player =>
        player.isMe ? { ...player, ready: !player.ready } : player
      )
    }

    gameState.update(newGameState)
    console.info(`Usuário ${socket.id} trocou o seu status de ready`)
  }
}

export { SwitchReady, SwitchReadyEventType }
