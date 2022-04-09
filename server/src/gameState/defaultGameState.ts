import { IGameState } from '../types/IGameState'

const defaultGameState: IGameState = {
  state: 'lobby',
  players: [],
  moves: [],
  currentPlayerOrder: 1,
  roomId: '',
  deck: []
}

export { defaultGameState }
