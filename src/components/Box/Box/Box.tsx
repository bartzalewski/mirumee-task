import { FC, ReactNode, useState } from 'react'

import ArrowOpen from 'images/arrow-open.svg'
import ArrowClose from 'images/arrow-close.svg'

import {
  Container,
  Wrapper,
  Title,
  Image,
  More,
  MoreDetails,
  Row,
  Head,
} from './Box.style'

interface Props {
  children: ReactNode
}

const Box: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Container>
        <Wrapper>
          <Title>{children}</Title>
          {open ? (
            <Image
              src={ArrowClose}
              alt="Close"
              onClick={() => setOpen(false)}
            />
          ) : (
            <Image src={ArrowOpen} alt="Open" onClick={() => setOpen(true)} />
          )}
        </Wrapper>
        {open && (
          <More>
            <MoreDetails>
              <Row>
                <Head>Planet Name</Head>
                <Head>Rotation period</Head>
                <Head>Orbital period</Head>
                <Head>Diameter</Head>
                <Head>Climate</Head>
                <Head>Surface water</Head>
                <Head>Population</Head>
              </Row>
              <Row>
                <Head></Head>
                <Head></Head>
                <Head></Head>
                <Head></Head>
                <Head></Head>
                <Head></Head>
                <Head></Head>
              </Row>
            </MoreDetails>
          </More>
        )}
      </Container>
    </>
  )
}

export default Box
