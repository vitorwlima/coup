import { Cards } from './Cards'

type IPlayer = {
  socketId: string
  ready: boolean
  cards: Cards[]
  coins: number
  name: string
  alive: boolean
  winner: boolean
  isMe: boolean
  host: boolean
  order: number
}

export type { IPlayer }
