import type { NextPage } from 'next'
import Head from 'next/head'

import { useGameState } from 'src/hooks/useGameState'
import { Gameover } from 'src/screens/Gamover'
import { Ingame } from 'src/screens/Ingame'
import { Initial } from 'src/screens/Initial'
import { Lobby } from 'src/screens/Lobby'

const Home: NextPage = () => {
  const {
    gameState: { state }
  } = useGameState()

  const renderCurrentScreen = () =>
    ({
      initial: <Initial />,
      lobby: <Lobby />,
      ingame: <Ingame />,
      gameover: <Gameover />
    }[state])

  return (
    <>
      <Head>
        <title>Coup | Jogar online</title>
      </Head>
      <main className='font-roboto'>{renderCurrentScreen()}</main>
    </>
  )
}

export default Home
