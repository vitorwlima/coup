import { useGameState } from 'src/hooks/useGameState'
import { PlayerContainer } from 'src/components/PlayerContainer'
import { PlayerInfo } from 'src/components/PlayerInfo'
import { MoveButton } from 'src/components/MoveButton'
import { ActiveMoves } from 'src/types/ActiveMoves'
import { PassiveMoves } from 'src/types/PassiveMoves'
import { getDisplayNameByMove } from 'src/utils/getDisplayNameByMove'
import { getColorByActiveMove } from 'src/utils/getColorByActiveMove'

const Ingame = () => {
  const { gameState, myPlayer, emitEvent } = useGameState()
  const playersInCorrectOrder = [...gameState.players].sort((a, b) => a.order - b.order)
  const notInTurn = myPlayer.order !== gameState.currentPlayerOrder

  const handleMove = (move: PassiveMoves | ActiveMoves) => {
    emitEvent(move)
  }

  const getGameText = () => {
    const playerNamePlaying = gameState.players.find(player => player.order === gameState.currentPlayerOrder)!.name
    return `Turno de: ${playerNamePlaying}`
  }

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
        <p className='text-3xl font-bold'>{getGameText()}</p>
      </section>
      <section className='flex items-end justify-between w-full gap-14'>
        <section>
          <PlayerInfo player={myPlayer} />
        </section>
        <section className='flex-1'>
          <div className='flex items-center gap-3'>
            {Object.values(PassiveMoves).map(move => (
              <MoveButton
                key={move}
                background='bg-zinc-100'
                color='text-zinc-900'
                onClick={() => handleMove(move)}
                disabled={notInTurn}
              >
                {getDisplayNameByMove(move, { toUpperCase: true })}
              </MoveButton>
            ))}
          </div>
          <div className='flex items-center gap-3 mt-3'>
            {Object.values(ActiveMoves).map(move => (
              <MoveButton
                key={move}
                background={getColorByActiveMove(move)}
                color='text-gray-100'
                onClick={() => handleMove(move)}
                disabled={notInTurn}
              >
                {getDisplayNameByMove(move, { toUpperCase: true })}
              </MoveButton>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}

export { Ingame }
