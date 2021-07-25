import { FC, ReactNode } from 'react'

import { Container, Title } from './BoxMovie.style'

interface BoxMovieProps {
  children: ReactNode
}

const BoxMovie: FC<BoxMovieProps> = ({ children }) => {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  )
}

export default BoxMovie
