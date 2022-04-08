import { useGameState } from 'src/hooks/useGameState'
import { PregameContainer } from 'src/components/PregameContainer'
import { Title } from 'src/components/Title'
import { Footer } from 'src/components/Footer'
import { Button } from 'src/components/Button'
import { BackButton } from 'src/components/BackButton'

const Lobby = () => {
  const { roomId, players } = useGameState()

  const handleCopyRoomId = () => {
    navigator.clipboard.writeText(roomId)
  }

  return (
    <PregameContainer>
      <section className='flex flex-col gap-y-20 w-full max-w-lg text-xl items-center'>
        <Title className='mx-auto' />
        <div className='flex items-center gap-x-4 mx-auto'>
          <p>Código da sala:</p>
          <button
            className='px-4 py-1 rounded bg-cyan-500 hover:brightness-90 transition-all'
            onClick={() => handleCopyRoomId()}
          >
            {roomId}
          </button>
        </div>
        <ul className='flex flex-col gap-y-1 min-w-[40%]'>
          {players.map((player, index) => (
            <li key={player.socketId}>
              {index + 1}. {player.name}
              {player.isMe && ' (eu)'}
            </li>
          ))}
        </ul>
        <div className='flex flex-col gap-y-4 min-w-[40%]'>
          <Button>Começar</Button>
          <BackButton>Voltar</BackButton>
        </div>
      </section>
      <Footer />
    </PregameContainer>
  )
}

export { Lobby }
