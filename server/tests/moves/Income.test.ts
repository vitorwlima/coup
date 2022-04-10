import { gameStateRightBeforeStart as gameState } from '../../mocks/gameStateRightAfterStart'
import { Income } from '../../src/moves/Income'

describe('Move - Income', () => {
  it('Player should have 1 more coin', () => {
    const coinsBefore = gameState.players.find(
      player => player.order === gameState.currentPlayerOrder
    )!.coins

    const newGameState = new Income({ gameState }).exec()
    const coinsAfter = newGameState.players.find(
      player => player.order === gameState.currentPlayerOrder
    )!.coins

    expect(coinsAfter - coinsBefore).toBe(1)
  })
})
