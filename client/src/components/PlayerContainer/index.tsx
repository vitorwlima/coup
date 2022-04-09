import { FaCoins } from 'react-icons/fa'

import { IPlayer } from 'src/types/IPlayer'

type Props = {
  player: IPlayer
  isPlayersTurn: boolean
}

const FaceDownCard = () => <div className='w-8 h-14 bg-zinc-900 rounded-sm' />

const PlayerContainer = ({ player, isPlayersTurn }: Props) => {
  return (
    <div
      className={`bg-zinc-300 rounded-md w-32 p-2 text-zinc-900 flex flex-col items-center gap-y-2 text-lg border-2 border-solid ${
        isPlayersTurn ? ' border-zinc-900' : 'border-transparent'
      }`}
    >
      <p className='font-bold'>
        {player.name}
        {player.isMe && ' (eu)'}
      </p>
      <div className='flex gap-2'>
        {player.cards.map((_, i) => (
          <FaceDownCard key={i} />
        ))}
      </div>
      <div className='flex items-center gap-x-2'>
        <FaCoins />
        <p className='font-bold'>{player.coins}</p>
      </div>
    </div>
  )
}

export { PlayerContainer }
