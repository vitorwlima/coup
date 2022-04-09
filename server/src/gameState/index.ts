import { io } from '..'
import { Events } from '../types/Events'
import { IGameState } from '../types/IGameState'
class GameState {
  private static instance: GameState
  private roomId: string

  private constructor(roomId: string) {
    this.roomId = roomId
  }

  static getInstance(roomId: string): GameState {
    const instance = GameState.instance ? GameState.instance : new GameState(roomId)
    return instance
  }

  public update(newGameState: IGameState) {
    const { roomId } = this
    io.to(roomId).emit(Events.UPDATE_GAME, newGameState)
  }

  public updateAndEndTurn(newGameState: IGameState) {
    const {
      currentPlayerOrder,
      players: { length: playersAmount }
    } = newGameState
    const newPlayerOrder = currentPlayerOrder === playersAmount ? 1 : currentPlayerOrder + 1
    const finalGameState: IGameState = { ...newGameState, currentPlayerOrder: newPlayerOrder }
    this.update(finalGameState)
  }

  public emitEvent(eventName: string, payload: any) {
    const { roomId } = this
    io.to(roomId).emit(eventName, payload)
  }
}

export { GameState }
