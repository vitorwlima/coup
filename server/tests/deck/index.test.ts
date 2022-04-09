import { playersRightBeforeStartMock } from '../../mocks/playersRightBeforeStart'
import { Deck } from '../../src/deck'
import { defaultGameState } from '../../src/gameState/defaultGameState'
import { CardNames } from '../../src/types/CardNames'

const gameStateMock = {
  ...defaultGameState,
  players: playersRightBeforeStartMock
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
