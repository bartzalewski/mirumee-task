import { useEffect, useState } from 'react'
import axios from 'axios'

import Box from 'components/Box/Box/Box'
import Loader from 'components/Loader/Loader'

import { Film } from 'types/Film'
import { CustomFilm } from 'types/CustomFilm'

import { Container, LoaderWrapper } from './BoxList.style'

type BoxListProps = {
  customFilms: CustomFilm[]
}

export default function BoxList({ customFilms }: BoxListProps) {
  const [data, setData] = useState<Film[]>([])

  const fetchData = () =>
    axios
      .get('https://swapi.dev/api/films/')
      .then((res) => setData(res.data.results))

  useEffect(() => {
    setTimeout(() => {
      fetchData()
    }, 500)
  }, [])

  if (data.length === 0)
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    )

  return (
    <Container>
      {data.map((obj, idx) => {
        return (
          <Box key={idx + 1} id={idx + 1}>
            <span>{obj?.title}</span>
          </Box>
        )
      })}
      {customFilms.map((obj, idx) => {
        return (
          <Box key={idx + 1} id={idx + 1} customFilmPlanets={obj?.planets}>
            <span>{obj?.title}</span>
          </Box>
        )
      })}
    </Container>
  )
}
