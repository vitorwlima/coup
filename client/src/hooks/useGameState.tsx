import { createContext, ReactNode, useContext, useState } from 'react'

import { socket } from 'src/socket'
import { Events } from 'src/types/Events'
import { IPlayer } from 'src/types/IPlayer'
import { IGameState } from 'src/types/IGameState'

type GameStateCtx = {
  gameState: IGameState
  myPlayer: IPlayer
  emitEvent: (eventName: string, args?: Object) => void
}

const defaultGameState: IGameState = {
  state: 'lobby',
  players: [],
  moves: [],
  currentPlayerOrder: 1,
  roomId: '',
  deck: []
}

const defaultPlayer: IPlayer = {
  socketId: '',
  ready: false,
  cards: [],
  coins: 0,
  name: '',
  alive: true,
  winner: false,
  isMe: false,
  host: false,
  order: 0
}

const GameStateContext = createContext<GameStateCtx>({
  gameState: defaultGameState,
  myPlayer: defaultPlayer,
  emitEvent: () => {}
})

const GameStateContextProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState(defaultGameState)
  const [myPlayer, setMyPlayer] = useState(defaultPlayer)
  const isHost = gameState.players.length === 1 || gameState.players[0]?.isMe

  const emitEvent = (eventName: string, args?: any) => {
    socket.emit(eventName, { args, gameState, roomId: gameState.roomId })
  }

  socket.on(Events.UPDATE_GAME, (event: IGameState) => {
    const newGameState = {
      ...event,
      players: event.players.map((player, index) => ({
        ...player,
        isMe: player.socketId === socket.id,
        host: index === 0,
        ready: player.ready || index === 0
      }))
    }
    setMyPlayer(newGameState.players.find(player => player.isMe)!)
    setGameState(newGameState)
  })

  socket.on(Events.NEW_PLAYER_JOINED, (event: IPlayer) => {
    if (!isHost) return
    emitEvent(Events.UPDATE_PLAYER_LIST, {
      player: event
    })
  })

  return (
    <GameStateContext.Provider value={{ gameState, myPlayer, emitEvent }}>
      {children}
    </GameStateContext.Provider>
  )
}

const useGameState = () => {
  const context = useContext(GameStateContext)
  return context
}

export { GameStateContextProvider, useGameState }
