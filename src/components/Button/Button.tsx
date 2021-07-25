import { Container } from './Button.style'

type ButtonProps = {
  handleAddMovie: () => void
}

export default function Button({ handleAddMovie }: ButtonProps) {
  return <Container onClick={handleAddMovie}>ADD MOVIE</Container>
}
