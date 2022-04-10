import type { AppProps } from 'next/app'

import { GameStateContextProvider } from 'src/hooks/useGameState'
import 'src/styles/globals.css'

/**
 * PurgeCSS:
 * bg-pink-600
 * bg-zinc-700
 * bg-sky-600
 * bg-green-500
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameStateContextProvider>
      <Component {...pageProps} />
    </GameStateContextProvider>
  )
}

export default MyApp
