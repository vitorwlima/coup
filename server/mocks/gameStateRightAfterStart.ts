import { Deck } from '../src/deck'
import { playersRightBeforeStartMock } from './playersRightBeforeStart'

const deckInstance = new Deck()

const gameStateRightBeforeStart = deckInstance.dealCards({
  currentPlayerOrder: 1,
  deck: [],
  moves: [],
  players: playersRightBeforeStartMock,
  roomId: '',
  state: 'ingame'
})

export { gameStateRightBeforeStart }
