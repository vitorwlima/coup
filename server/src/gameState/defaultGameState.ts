import { IGameState } from '../types/IGameState'

const defaultGameState: IGameState = {
  state: 'lobby',
  players: [],
  moves: [],
  nextAction: {},
  roomId: ''
}

export { defaultGameState }
