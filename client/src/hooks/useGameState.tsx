import { createContext, ReactNode, useContext, useState } from 'react'

import { socket } from 'src/socket'
import { Cards } from 'src/types/cards'

type Player = {
  socketId: string
  ready: boolean
  cards: Cards[]
  coins: number
  name: string
  alive: boolean
  winner: boolean
  isMe: boolean
}

type GameState = {
  state: 'initial' | 'lobby' | 'ingame' | 'gameover'
  players: Player[]
  moves: any[] // log
  nextAction: any
  roomId: string
}

const defaultGameState: GameState = {
  state: 'initial',
  players: [],
  moves: [],
  nextAction: {},
  roomId: ''
}

const GameStateContext = createContext<GameState>(defaultGameState)

const emitEvent = (eventName: string, roomId: string, args: any) => {
  socket.emit(eventName, { ...args, roomId })
}

const GameStateContextProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState(defaultGameState)
  const isFirstPlayer = gameState.players.length === 1 || gameState.players[0]?.isMe

  socket.on('update-game', (event: GameState) => {
    const newGameState = {
      ...event,
      players: event.players.map(player => ({ ...player, isMe: player.socketId === socket.id }))
    }
    setGameState(newGameState)
  })

  socket.on('new-player-joined', (event: Player) => {
    if (!isFirstPlayer) return
    emitEvent('update-player-list', gameState.roomId, {
      player: event,
      currentGameState: gameState
    })
  })

  return <GameStateContext.Provider value={gameState}>{children}</GameStateContext.Provider>
}

const useGameState = () => {
  const context = useContext(GameStateContext)
  return context
}

export { GameStateContextProvider, useGameState }
