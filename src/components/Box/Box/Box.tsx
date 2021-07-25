import { FC, ReactNode, useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import { Film } from 'types/Film'
import { Planet } from 'types/Planet'

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

interface BoxProps {
  children: ReactNode
  id: number
  customFilmPlanets?: Planet[]
}

const Box: FC<BoxProps> = ({ children, id, customFilmPlanets }) => {
  const [open, setOpen] = useState<boolean>(false)

  const [planetsData, setPlanetsData] = useState<Planet[]>([])
  const [filmsData, setFilmsData] = useState<Film>(null)

  const fetchFilmsData = (id: number) =>
    axios
      .get(`https://swapi.dev/api/films/${id}/`)
      .then((res) => setFilmsData(res.data))

  const handleClick = (id: number) => {
    setOpen(true)
    if (customFilmPlanets) return
    return fetchFilmsData(id)
  }

  const fetchPlanets = useCallback(() => {
    const planets = filmsData?.planets
    const planetsOutput = planets?.map((item) => {
      const fetchedItem = axios.get(item).then((res) => res.data)

      return fetchedItem
    })
    if (planetsOutput)
      axios.all(planetsOutput).then((res) => setPlanetsData(res))
  }, [filmsData?.planets])

  useEffect(() => {
    fetchPlanets()
  }, [fetchPlanets])

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
            <Image src={ArrowOpen} alt="Open" onClick={() => handleClick(id)} />
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
              {planetsData.map((item, idx) => {
                return (
                  <Row key={idx}>
                    <Head>{item.name}</Head>
                    <Head>{item.rotation_period}</Head>
                    <Head>{item.orbital_period}</Head>
                    <Head>{item.diameter}</Head>
                    <Head>{item.climate}</Head>
                    <Head>{item.surface_water}</Head>
                    <Head>{item.population}</Head>
                  </Row>
                )
              })}
              {customFilmPlanets &&
                customFilmPlanets.map((item, idx) => {
                  return (
                    <Row key={idx}>
                      <Head>{item.name}</Head>
                      <Head>{item.rotation_period}</Head>
                      <Head>{item.orbital_period}</Head>
                      <Head>{item.diameter}</Head>
                      <Head>{item.climate}</Head>
                      <Head>{item.surface_water}</Head>
                      <Head>{item.population}</Head>
                    </Row>
                  )
                })}
            </MoreDetails>
          </More>
        )}
      </Container>
    </>
  )
}

export default Box
