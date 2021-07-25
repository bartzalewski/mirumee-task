import BoxList from 'components/Box/BoxList/BoxList'
import AddMovie from 'components/AddMovie/AddMovie'

import Line from 'images/line.svg'
import Logo from 'images/logo.svg'

import { Container, Image, Copyright, HR } from './Card.style'

export default function Card() {
  return (
    <Container>
      <Image src={Logo} alt="Logo" />
      <BoxList />
      <HR src={Line} alt="Line" />
      <AddMovie />
      <Copyright>COPYRIGHT &copy; 2019 MIRUMEE SOFTWARE</Copyright>
    </Container>
  )
}
