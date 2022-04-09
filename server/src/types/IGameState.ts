import { ICard } from './ICard'
import { IPlayer } from './IPlayer'

type IGameState = {
  state: 'initial' | 'lobby' | 'ingame' | 'gameover'
  players: IPlayer[]
  moves: any[]
  nextAction: any
  roomId: string
  deck: ICard[]
}

export type { IGameState }
