import { io } from '..'
import { IGameState } from '../types/IGameState'

interface GameState {
  roomId: string
}
class GameState {
  private static instance: GameState

  private constructor(roomId: string) {
    this.roomId = roomId
  }

  static getInstance(roomId: string): GameState {
    const instance = GameState.instance ? GameState.instance : new GameState(roomId)
    return instance
  }

  public update(newGameState: IGameState) {
    const { roomId } = this
    io.to(roomId).emit('update-game', newGameState)
  }

  public emitEvent(eventName: string, payload: any) {
    const { roomId } = this
    io.to(roomId).emit(eventName, payload)
  }
}

export { GameState }
