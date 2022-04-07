import type { AppProps } from 'next/app'
import { GameStateContextProvider } from './hooks/useGameState'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameStateContextProvider>
      <Component {...pageProps} />
    </GameStateContextProvider>
  )
}

export default MyApp
