import { Moves } from '.'
import { GameState } from '../gameState'

class Income extends Moves {
  constructor({ gameState }: Moves) {
    super(gameState)
  }

  exec() {
    const { gameState } = this
    const newPlayers = gameState.players.map(player =>
      player.order === gameState.currentPlayerOrder
        ? { ...player, coins: player.coins + 1 }
        : player
    )
    const newGameState = { ...gameState, players: newPlayers }
    return newGameState
  }

  update() {
    const newGameState = this.exec()
    const gameStateInstance = GameState.getInstance(this.gameState.roomId)
    gameStateInstance.updateAndEndTurn(newGameState)
  }
}

export { Income }
