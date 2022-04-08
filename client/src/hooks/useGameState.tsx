import { createContext, ReactNode, useContext, useState } from 'react'

import { socket } from 'src/socket'
import { Cards } from 'src/types/cards'
import { Events } from 'src/types/events'

type Player = {
  socketId: string
  ready: boolean
  cards: Cards[]
  coins: number
  name: string
  alive: boolean
  winner: boolean
  isMe: boolean
  host: boolean
}

type GameState = {
  state: 'initial' | 'lobby' | 'ingame' | 'gameover'
  players: Player[]
  moves: any[]
  nextAction: any
  roomId: string
}

type GameStateCtx = {
  gameState: GameState
  myPlayer: Player
  emitEvent: (eventName: string, args?: Object) => void
}

const defaultGameState: GameState = {
  state: 'initial',
  players: [],
  moves: [],
  nextAction: {},
  roomId: ''
}

const defaultPlayer: Player = {
  socketId: '',
  ready: false,
  cards: [],
  coins: 0,
  name: '',
  alive: true,
  winner: false,
  isMe: false,
  host: false
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

  socket.on(Events.UPDATE_GAME, (event: GameState) => {
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

  socket.on(Events.NEW_PLAYER_JOINED, (event: Player) => {
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
