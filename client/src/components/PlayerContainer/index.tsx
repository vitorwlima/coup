import { FaCoins } from 'react-icons/fa'

import { IPlayer } from 'src/types/IPlayer'

type Props = {
  player: IPlayer
}

const PlayerContainer = ({ player }: Props) => {
  const renderFaceDownCard = () => <div className='w-8 h-14 bg-zinc-900 rounded-sm' />

  return (
    <div className='bg-zinc-300 rounded-md w-32 p-2 text-zinc-900 flex flex-col items-center gap-y-2 text-lg'>
      <p className='font-bold'>
        {player.name}
        {player.isMe && ' (eu)'}
      </p>
      <div className='flex gap-2'>{player.cards.map(_ => renderFaceDownCard())}</div>
      <div className='flex items-center gap-x-2'>
        <FaCoins />
        <p className='font-bold'>{player.coins}</p>
      </div>
    </div>
  )
}

export { PlayerContainer }
