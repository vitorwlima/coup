import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useGameState } from './hooks/useGameState'

import { socket } from './socket'

const Home: NextPage = () => {
  const [roomId, setRoomId] = useState('')
  const [name, setName] = useState('')
  const gameState = useGameState()

  const joinRoom = () => {
    socket.emit('join-room', { roomId, name })
  }

  const createRoom = () => {
    socket.emit('create-room', { name })
  }

  return (
    <div>
      <label>Código da sala</label>
      <input value={roomId} onChange={e => setRoomId(e.target.value)} />
      <div />
      <label>Nome</label>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div />
      <button onClick={() => joinRoom()}>Entrar na sala</button>
      <button onClick={() => createRoom()}>Criar sala</button>
      <div>{gameState.roomId && `ID da sala: ${gameState.roomId}`}</div>
      <ul>
        {gameState.players?.map(player => (
          <li key={player.socketId}>
            {player.name} {player.isMe && '(Eu)'}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
