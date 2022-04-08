import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const PregameContainer = ({ children }: Props) => {
  return (
    <div className='h-screen flex items-center flex-col justify-between px-1 pt-8 pb-2'>
      {children}
    </div>
  )
}

export { PregameContainer }
