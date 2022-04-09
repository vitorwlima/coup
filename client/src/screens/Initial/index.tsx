import { useState } from 'react'

import { Title } from 'src/components/Title'
import { Footer } from 'src/components/Footer'
import { PregameContainer } from 'src/components/PregameContainer'
import { Button } from 'src/components/Button'
import { BackButton } from 'src/components/BackButton'
import { useGameState } from 'src/hooks/useGameState'
import { Events } from 'src/types/Events'

type ActionToTake = 'none' | 'create' | 'join'

const Initial = () => {
  const { emitEvent } = useGameState()
  const [actionToTake, setActionToTake] = useState<ActionToTake>('none')
  const [name, setName] = useState('')
  const [roomId, setRoomId] = useState('')

  const inputStyle =
    'border-[1px] p-1 rounded-sm focus-visible:outline-none focus-visible:border-cyan-500'

  const handleCreateRoom = () => {
    emitEvent(Events.CREATE_ROOM, { name })
  }

  const handleJoinRoom = () => {
    emitEvent(Events.JOIN_ROOM, { roomId, name })
  }

  const renderFirstRoomScreen = () => {
    return (
      <>
        <Button className='mb-4' onClick={() => setActionToTake('create')}>
          Criar uma sala
        </Button>
        <Button onClick={() => setActionToTake('join')}>Entrar em uma sala</Button>
      </>
    )
  }

  const renderCreateRoomScreen = () => {
    return (
      <>
        <div className='flex flex-col mb-8'>
          <label htmlFor='name'>Nome</label>
          <input
            name='name'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
            className={inputStyle}
          />
        </div>
        <Button className='mb-4' onClick={() => handleCreateRoom()}>
          Criar
        </Button>
        <BackButton onClick={() => setActionToTake('none')}>Voltar</BackButton>
      </>
    )
  }

  const renderJoinRoomScreen = () => {
    return (
      <>
        <div className='flex flex-col'>
          <label htmlFor='name'>Nome</label>
          <input
            name='name'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
            className={inputStyle + ' mb-4'}
          />
          <label htmlFor='roomId'>Código da sala</label>
          <input
            name='roomId'
            value={roomId}
            onChange={e => setRoomId(e.target.value)}
            className={inputStyle + ' mb-8'}
          />
        </div>
        <Button className='mb-4' onClick={() => handleJoinRoom()}>
          Entrar
        </Button>
        <BackButton onClick={() => setActionToTake('none')}>Voltar</BackButton>
      </>
    )
  }

  const renderActionScreen = () =>
    ({
      none: renderFirstRoomScreen,
      create: renderCreateRoomScreen,
      join: renderJoinRoomScreen
    }[actionToTake]())

  return (
    <PregameContainer>
      <section className='flex flex-col gap-y-20 w-full max-w-lg'>
        <Title className='mx-auto' />
        <div className='flex flex-col'>{renderActionScreen()}</div>
      </section>
      <Footer />
    </PregameContainer>
  )
}

export { Initial }
