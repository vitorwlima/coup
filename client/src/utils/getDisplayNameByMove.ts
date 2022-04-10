import { ActiveMoves } from 'src/types/ActiveMoves'
import { PassiveMoves } from 'src/types/PassiveMoves'

type Options = {
  toUpperCase?: boolean
}

const getDisplayNameByMove = (move: ActiveMoves | PassiveMoves, options?: Options): string => {
  const displayName = {
    [PassiveMoves.INCOME]: 'renda',
    [PassiveMoves.FOREIGN_AID]: 'ajuda externa',
    [PassiveMoves.COUP]: 'golpe de estado',
    [ActiveMoves.TAX]: 'taxar',
    [ActiveMoves.ASSASSIN]: 'assassinar',
    [ActiveMoves.STEAL]: 'extorquir',
    [ActiveMoves.EXCHANGE]: 'trocar'
  }[move]

  if (options) {
    if (options.toUpperCase) return displayName.toUpperCase()
  }

  return displayName
}
export { getDisplayNameByMove }
