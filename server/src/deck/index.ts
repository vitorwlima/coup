import { CardNames } from '../types/CardNames'
import { ICard } from '../types/ICard'
import { IGameState } from '../types/IGameState'

class Deck {
  private exec(): ICard[] {
    const amountOfEachCard = 3
    const allCards = [
      CardNames.ASSASSINO,
      CardNames.CAPITAO,
      CardNames.CONDESSA,
      CardNames.DUQUE,
      CardNames.EMBAIXADOR
    ]
    const allCardsRepeating = [].concat(...Array(amountOfEachCard).fill(allCards))
    const deck = allCardsRepeating.map((cardName, index) => ({
      value: cardName,
      id: index + 1
    }))
    return deck
  }

  public dealCards(gameState: IGameState): IGameState {
    let deck = this.exec()
    const currentPlayers = gameState.players

    const randomIntFromInterval = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const getRandomCardAndRemove = () => {
      const firstCard = deck[randomIntFromInterval(0, deck.length - 1)]
      deck = deck.filter(card => card.id !== firstCard.id)
      return firstCard
    }

    const newPlayers = currentPlayers.map(player => ({
      ...player,
      cards: [getRandomCardAndRemove(), getRandomCardAndRemove()]
    }))

    const newGameState = { ...gameState, deck, players: newPlayers }

    return newGameState
  }
}

export { Deck }
