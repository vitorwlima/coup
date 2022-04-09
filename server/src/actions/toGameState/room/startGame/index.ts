import { Deck } from '../../../../deck'
import { GameState } from '../../../../gameState'
import { IGameState } from '../../../../types/IGameState'
import { IPlayer } from '../../../../types/IPlayer'
import { GeneralAction } from '../../../index'

type StartGameEventType = GeneralAction & {
  args: {}
}

class StartGame extends GeneralAction {
  constructor({ socket, roomId, gameState }: GeneralAction) {
    super(socket, roomId, gameState)
  }

  public exec() {
    const { socket, gameState, roomId } = this

    const gameStateInstance = GameState.getInstance(roomId)

    const generateRandomOrdersForPlayersAndInitialCoins = (players: IPlayer[]): IPlayer[] => {
      let numbersToGuess = players.map((_, i) => i + 1)
      return players.map(player => {
        const randomValue = numbersToGuess[Math.floor(Math.random() * numbersToGuess.length)]
        numbersToGuess = numbersToGuess.filter(item => item !== randomValue)
        return { ...player, coins: 2, order: randomValue }
      })
    }

    const gameStateUpdatedPlayers: IGameState = {
      ...gameState,
      players: generateRandomOrdersForPlayersAndInitialCoins(gameState.players),
      state: 'ingame'
    }

    const deckInstance = new Deck()
    const finalGameState = deckInstance.dealCards(gameStateUpdatedPlayers)

    gameStateInstance.update(finalGameState)
    console.info(`Usuário ${socket.id} iniciou o jogo`)
  }
}

export { StartGame, StartGameEventType }
