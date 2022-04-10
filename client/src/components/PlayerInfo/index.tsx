import Image from 'next/image'
import { FaCoins } from 'react-icons/fa'

import { IPlayer } from 'src/types/IPlayer'

type Props = {
  player: IPlayer
}

const PlayerInfo = ({ player }: Props) => {
  return (
    <div>
      <div className='flex items-center gap-2 text-3xl mb-3'>
        <FaCoins />
        <p className='font-bold'>{player.coins}</p>
      </div>
      <div className='flex gap-x-1'>
        {player.cards.map(card => (
          <Image
            key={card.id}
            alt={card.value}
            src={`/cards/${card.value}.jpeg`}
            width={200}
            height={300}
          />
        ))}
      </div>
    </div>
  )
}

export { PlayerInfo }
