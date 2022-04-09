import { ICard } from './ICard'

type IPlayer = {
  socketId: string
  ready: boolean
  cards: ICard[]
  coins: number
  name: string
  alive: boolean
  winner: boolean
  isMe: boolean
  host: boolean
  order: number
}

export type { IPlayer }
