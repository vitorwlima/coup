import { GenerateDeck } from '../../../src/deck/generateDeck'
import { CardNames } from '../../../src/types/CardNames'

describe('GenerateDeck', () => {
  it('Should have correct amount of cards', () => {
    const cardsAmount = Object.keys(CardNames).length
    const deck = GenerateDeck.exec()

    expect(deck.length).toBe(cardsAmount * 3)
  })

  it('Should have ids from 1 to cardsAmount', () => {
    const cardsAmount = Object.keys(CardNames).length
    const deck = GenerateDeck.exec()

    let smallestId = 5
    let greatestId = 5

    deck.forEach(card => {
      if (card.id < smallestId) smallestId = card.id
      if (card.id > greatestId) greatestId = card.id
    })

    expect(smallestId).toBe(1)
    expect(greatestId).toBe(cardsAmount * 3)
  })
})
