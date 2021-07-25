import { useState } from 'react'

import { CustomFilm } from 'types/CustomFilm'

import BoxList from 'components/Box/BoxList/BoxList'
import AddMovie from 'components/AddMovie/AddMovie'

import Line from 'images/line.svg'
import Logo from 'images/logo.svg'

import { Container, Image, Copyright, HR } from './Card.style'

export default function Card() {
  const [customFilms, setCustomFilms] = useState<CustomFilm[]>([])

  return (
    <Container>
      <Image src={Logo} alt="Logo" />
      <BoxList customFilms={customFilms} />
      <HR src={Line} alt="Line" />
      <AddMovie customFilms={customFilms} setCustomFilms={setCustomFilms} />
      <Copyright>COPYRIGHT &copy; 2019 MIRUMEE SOFTWARE</Copyright>
    </Container>
  )
}
