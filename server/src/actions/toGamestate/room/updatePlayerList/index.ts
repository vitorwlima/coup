import { GameState } from '../../../../gameState'
import { IPlayer } from '../../../../types/IPlayer'
import { GeneralAction } from '../../../index'

type UpdatePlayerListEventType = GeneralAction & {
  args: {
    player: IPlayer
  }
}

class UpdatePlayerList extends GeneralAction {
  constructor({ socket, roomId, gameState }: GeneralAction) {
    super(socket, roomId, gameState)
  }

  public exec(event: UpdatePlayerListEventType['args']) {
    const { roomId, socket, gameState: currentGameState } = this
    const { player } = event

    const gameState = GameState.getInstance(roomId)

    const players = [...currentGameState.players, player]
    const newGameState = { ...currentGameState, players }

    gameState.update(newGameState)
    console.info(`Usuário ${socket.id} entrou na sala ${roomId}`)
  }
}

export { UpdatePlayerList, UpdatePlayerListEventType }
