import { LucideCoins } from 'lucide-react'
import Image from 'next/image'

import { IPlayer } from 'src/types/IPlayer'

type Props = {
  player: IPlayer
}

const PlayerInfo = ({ player }: Props) => {
  return (
    <div>
      <div className='flex items-center gap-2 text-3xl mb-3'>
        <LucideCoins />
        <p className='font-bold'>{player.coins}</p>
      </div>
      <div className='flex gap-x-1'>
        {player.cards.map(card => (
          <div key={card.id} className='relative h-[300px] rounded-md overflow-hidden'>
            <div className='absolute inset-0 z-10 bg-gradient-to-b from-zinc-900/0 to-zinc-900/90' />
            <p className='capitalize absolute bottom-1 z-10 left-1/2 -translate-x-1/2 text-zinc-200 text-sm font-semibold'>
              {card.value === 'capitao' ? 'capitão' : card.value}
            </p>
            <Image alt={card.value} src={`/cards/${card.value}.jpeg`} width={218} height={300} />
          </div>
        ))}
      </div>
    </div>
  )
}

export { PlayerInfo }
