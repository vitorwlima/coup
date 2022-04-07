import { GameState } from '../../../gameState'
import { GeneralAction } from '../../index'
import { UpdatePlayerListEventType } from './type'

class UpdatePlayerList extends GeneralAction {
  constructor({ socket, roomId }: GeneralAction) {
    super(socket, roomId)
  }

  public exec(event: UpdatePlayerListEventType) {
    const { roomId } = this
    const { player, currentGameState } = event

    const gameState = GameState.getInstance(roomId)

    gameState.updatePlayerList(player, currentGameState)
  }
}

export { UpdatePlayerList }
