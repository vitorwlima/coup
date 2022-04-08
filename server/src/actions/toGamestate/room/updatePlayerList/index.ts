import { GameState } from '../../../../gameState'
import { GeneralAction } from '../../../index'
import { UpdatePlayerListEventType } from './type'

class UpdatePlayerList extends GeneralAction {
  constructor({ socket, roomId }: GeneralAction) {
    super(socket, roomId)
  }

  public exec(event: UpdatePlayerListEventType) {
    const { roomId } = this
    const { player, currentGameState } = event

    const gameState = GameState.getInstance(roomId)

    const players = [...currentGameState.players, player]
    const newGameState = { ...currentGameState, players }

    gameState.update(newGameState)
    console.info(`Usuário ${player.socketId} entrou na sala ${roomId}`)
  }
}

export { UpdatePlayerList }
