import { useGameState } from 'src/hooks/useGameState'

const Lobby = () => {
  const gameState = useGameState()

  return (
    <div>
      <h1>Lobby</h1>
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

export { Lobby }
