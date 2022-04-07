import { io } from '..'
import { IGameState } from '../types/IGameState'
import { IPlayer } from '../types/IPlayer'

interface GameState {
  roomId: string
}

const defaultGameState: IGameState = {
  state: 'lobby',
  players: [],
  moves: [],
  nextAction: {},
  roomId: ''
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

  private update(newGameState: IGameState) {
    const { roomId } = this
    io.to(roomId).emit('update-game', newGameState)
  }

  public updatePlayerList(player: IPlayer, currentGameState: IGameState) {
    const players = [...currentGameState.players, player]
    const newGameState = { ...currentGameState, players }
    this.update(newGameState)
  }

  public createPlayer({
    socketId,
    name
  }: Pick<IGameState['players'][number], 'name' | 'socketId'>) {
    const { roomId } = this

    const newPlayer = {
      alive: true,
      cards: [],
      coins: 0,
      ready: false,
      winner: false,
      name,
      socketId
    }
    io.to(roomId).emit('new-player-joined', newPlayer)
  }

  public createFirstPlayer({
    socketId,
    name,
    roomId
  }: Pick<IGameState['players'][number], 'name' | 'socketId'> & { roomId: string }) {
    const newPlayer = {
      alive: true,
      cards: [],
      coins: 0,
      ready: false,
      winner: false,
      name,
      socketId
    }
    this.update({ ...defaultGameState, players: [newPlayer], roomId })
  }
}

export { GameState }
