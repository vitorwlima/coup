import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
}

const Button = ({ className, children, ...rest }: Props) => {
  return (
    <button
      className={`bg-cyan-500 p-2 font-bold rounded-md hover:brightness-90 border-transparent border-2 transition-all disabled:bg-slate-400 disabled:cursor-not-allowed disabled:hover:brightness-100 ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export { Button }
