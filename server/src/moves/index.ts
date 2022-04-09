import { IGameState } from '../types/IGameState'

class Moves {
  gameState: IGameState
  constructor(gameState: IGameState) {
    this.gameState = gameState
  }
}

export { Moves }
