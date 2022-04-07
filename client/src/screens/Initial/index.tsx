import { useState } from 'react'

import { socket } from 'src/socket'
import { Title } from 'src/components/Title'
import { Footer } from 'src/components/Footer'

type ActionToTake = 'none' | 'create' | 'join'

const Initial = () => {
  const [actionToTake, setActionToTake] = useState<ActionToTake>('none')
  const [name, setName] = useState('')
  const [roomId, setRoomId] = useState('')

  const buttonStyle =
    'bg-cyan-500 p-2 font-bold rounded-md hover:brightness-90 border-transparent border-2 transition-all'
  const backButtonStyle =
    'bg-white p-2 font-bold rounded-md hover:brightness-90 border-cyan-900 border-2 transition-all'
  const inputStyle =
    'border-[1px] p-1 rounded-sm focus-visible:outline-none focus-visible:border-cyan-500'

  const handleCreateRoom = () => {
    socket.emit('create-room', { name })
  }

  const handleJoinRoom = () => {
    socket.emit('join-room', { roomId, name })
  }

  const renderFirstRoomScreen = () => {
    return (
      <>
        <button className={buttonStyle + ' mb-4'} onClick={() => setActionToTake('create')}>
          Criar uma sala
        </button>
        <button className={buttonStyle} onClick={() => setActionToTake('join')}>
          Entrar em uma sala
        </button>
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
        <button className={buttonStyle + ' mb-4'} onClick={() => handleCreateRoom()}>
          Criar
        </button>
        <button className={backButtonStyle} onClick={() => setActionToTake('none')}>
          Voltar
        </button>
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
        <button className={buttonStyle + ' mb-4'} onClick={() => handleJoinRoom()}>
          Entrar
        </button>
        <button className={backButtonStyle} onClick={() => setActionToTake('none')}>
          Voltar
        </button>
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
    <div className='h-screen flex items-center flex-col justify-between px-1 pt-8 pb-2'>
      <section className='flex flex-col gap-y-20 w-full max-w-lg'>
        <Title className='mx-auto' />
        <div className='flex flex-col'>{renderActionScreen()}</div>
      </section>
      <Footer />
    </div>
  )
}

export { Initial }
