import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
}

const BackButton = ({ className, children, ...rest }: Props) => {
  return (
    <button
      className={`bg-white p-2 font-bold rounded-md hover:brightness-90 border-cyan-900 border-2 transition-all ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export { BackButton }
