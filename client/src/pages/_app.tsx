import type { AppProps } from 'next/app'

import { GameStateContextProvider } from 'src/hooks/useGameState'
import 'src/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameStateContextProvider>
      <Component {...pageProps} />
    </GameStateContextProvider>
  )
}

export default MyApp
