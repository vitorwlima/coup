import { Moves } from '.'
import { IGameState } from '../types/IGameState'

class Income extends Moves {
  exec(): IGameState {
    const { gameState } = this
    const newPlayers = gameState.players.map(player =>
      player.order === gameState.currentPlayerOrder
        ? { ...player, coins: player.coins + 1 }
        : player
    )
    const newGameState = { ...gameState, players: newPlayers }
    return newGameState
  }
}

export { Income }
