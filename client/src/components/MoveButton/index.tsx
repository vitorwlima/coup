import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  background: string
  color: string
}

const MoveButton = ({ children, background, color, ...rest }: Props) => {
  return (
    <button
      className={`${background} ${color} border-2 border-solid border-zinc-900 p-3 bg-zinc flex-1 font-bold lg:text-xl rounded-xl hover:brightness-90 transition-all disabled:hover:brightness-100 disabled:cursor-not-allowed`}
      {...rest}
    >
      {children}
    </button>
  )
}

export { MoveButton }
