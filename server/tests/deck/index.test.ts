import { Deck } from '../../src/deck'
import { defaultGameState } from '../../src/gameState/defaultGameState'
import { CardNames } from '../../src/types/CardNames'

const gameStateMock = {
  ...defaultGameState,
  players: [
    {
      alive: false,
      cards: [],
      coins: 0,
      name: 'feravitinho',
      order: 2,
      ready: true,
      socketId: 'meuId',
      winner: false,
      isMe: true
    },
    {
      alive: false,
      cards: [],
      coins: 0,
      name: 'luisao',
      order: 3,
      ready: true,
      socketId: 'meuId2',
      winner: false,
      isMe: false
    },
    {
      alive: false,
      cards: [],
      coins: 0,
      name: 'luci',
      order: 1,
      ready: true,
      socketId: 'meuId3',
      winner: false,
      isMe: false
    },
    {
      alive: false,
      cards: [],
      coins: 0,
      name: 'marco',
      order: 4,
      ready: true,
      socketId: 'meuId4',
      winner: false,
      isMe: false
    }
  ]
}

describe('Deck', () => {
  it('All players should have 2 cards', () => {
    const deckInstance = new Deck()
    const newGameState = deckInstance.dealCards(gameStateMock)

    const playersCards = newGameState.players.map(player => player.cards)

    expect(playersCards.every(cardsArray => cardsArray.length === 2)).toBeTruthy()
  })

  it('All players and deck should have different cards', () => {
    const deckInstance = new Deck()
    const newGameState = deckInstance.dealCards(gameStateMock)
    const cardsAmount = Object.keys(CardNames).length

    const playersCards = newGameState.players.map(player => player.cards.map(card => card)).flat(1)
    const { deck } = newGameState

    const allCards = playersCards.concat(deck)
    const differentOccuredIds: number[] = []

    allCards.forEach(card => {
      if (!differentOccuredIds.includes(card.id)) {
        differentOccuredIds.push(card.id)
      }
    })

    expect(differentOccuredIds.length).toBe(cardsAmount * 3)
  })
})
