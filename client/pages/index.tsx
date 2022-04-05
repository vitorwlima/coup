import type { NextPage } from 'next'
import { useState } from 'react'
import { io } from 'socket.io-client'

const Home: NextPage = () => {
  const socket = io('http://localhost:5000')
  const [value, setValue] = useState('')

  const joinRoom = () => {
    socket.emit('join-room', { roomId: value })
  }

  return (
    <h1>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => joinRoom()}>Entrar na sala</button>
    </h1>
  )
}

export default Home
