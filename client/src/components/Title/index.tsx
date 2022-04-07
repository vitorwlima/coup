type Props = {
  className?: string
}

const Title = ({ className }: Props) => {
  return <h1 className={`text-8xl font-nunito ${className}`}>Coup</h1>
}

export { Title }
