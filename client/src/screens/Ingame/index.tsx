import { PlayerContainer } from 'src/components/PlayerContainer'
import { useGameState } from 'src/hooks/useGameState'

const Ingame = () => {
  const { gameState, myPlayer, emitEvent } = useGameState()
  return (
    <div className='pt-10 pb-8 px-3'>
      <section className='flex gap-4 justify-center'>
        {gameState.players.map(player => (
          <PlayerContainer key={player.socketId} player={player} />
        ))}
      </section>
    </div>
  )
}

export { Ingame }
