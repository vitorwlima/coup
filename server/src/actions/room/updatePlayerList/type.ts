import { IGameState } from '../../../types/IGameState'
import { IPlayer } from '../../../types/IPlayer'

type UpdatePlayerListEventType = {
  player: IPlayer
  currentGameState: IGameState
  roomId: string
}

export type { UpdatePlayerListEventType }
