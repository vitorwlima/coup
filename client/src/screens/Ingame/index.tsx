import { PlayerContainer } from 'src/components/PlayerContainer'
import { PlayerInfo } from 'src/components/PlayerInfo'
import { useGameState } from 'src/hooks/useGameState'

const Ingame = () => {
  const { gameState, myPlayer, emitEvent } = useGameState()
  const playersInCorrectOrder = [...gameState.players].sort((a, b) => a.order - b.order)

  return (
    <div className='pt-10 pb-8 px-3 flex flex-col items-center justify-between h-screen'>
      <section className='flex gap-4 justify-center'>
        {playersInCorrectOrder.map(player => (
          <PlayerContainer
            key={player.order}
            player={player}
            isPlayersTurn={player.order === gameState.currentPlayerOrder}
          />
        ))}
      </section>
      <section>
        <p className='text-3xl font-bold'>Texto explicado: Vez de jogar...</p>
      </section>
      <section className='flex items-center justify-between w-full'>
        <section>
          <PlayerInfo player={myPlayer} />
        </section>
        <section>osdadasdsadsadasdsadi</section>
        <section>oi</section>
      </section>
    </div>
  )
}

export { Ingame }
