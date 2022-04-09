import { PlayerContainer } from 'src/components/PlayerContainer'
import { useGameState } from 'src/hooks/useGameState'

const Ingame = () => {
  const { gameState, myPlayer, emitEvent } = useGameState()
  const playersInCorrectOrder = [...gameState.players].sort((a, b) => a.order - b.order)

  return (
    <div className='pt-10 pb-8 px-3'>
      <section className='flex gap-4 justify-center'>
        {playersInCorrectOrder.map(player => (
          <PlayerContainer key={player.order} player={player} />
        ))}
      </section>
    </div>
  )
}

export { Ingame }
