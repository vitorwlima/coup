import { CardNames } from '../../types/CardNames'
import { ICard } from '../../types/ICard'

class GenerateDeck {
  public static exec(): ICard[] {
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
}

export { GenerateDeck }
