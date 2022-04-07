import { Cards } from '../gameMechanics/cards'

type IPlayer = {
  socketId: string
  ready: boolean
  cards: Cards[]
  coins: number
  name: string
  alive: boolean
  winner: boolean
}

export type { IPlayer }
