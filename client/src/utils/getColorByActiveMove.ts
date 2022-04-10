import { ActiveMoves } from 'src/types/ActiveMoves'

const getColorByActiveMove = (move: ActiveMoves): string => {
  const displayName = {
    [ActiveMoves.TAX]: 'bg-pink-600',
    [ActiveMoves.ASSASSIN]: 'bg-zinc-700',
    [ActiveMoves.STEAL]: 'bg-sky-600',
    [ActiveMoves.EXCHANGE]: 'bg-green-500'
  }[move]

  return displayName
}
export { getColorByActiveMove }
