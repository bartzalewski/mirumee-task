import { useEffect, useState } from 'react'
import axios from 'axios'

import Box from 'components/Box/Box/Box'
import Loader from 'components/Loader/Loader'

import { Container, LoaderWrapper } from './BoxList.style'

export default function BoxList() {
  const [data, setData] = useState<any[]>([])
  const [planetsData, setPlanetsData] = useState<any[]>([])

  const fetchData = () =>
    axios
      .get('https://swapi.dev/api/films/')
      .then((res) => setData(res.data.results))

  const fetchPlanetsData = (id: number) =>
    axios
      .get(`https://swapi.dev/api/planets/${id}/`)
      .then((res) => setPlanetsData(res.data))

  useEffect(() => {
    setTimeout(() => {
      fetchData()
    }, 500)
  }, [])

  // useEffect(() => {
  //   const fetchPlanets = () => {
  //     const planets = data.map((obj) => obj);
  //     if (planets && planets.length > 0) {
  //       const planet = planets[0].planets;
  //       const output = planet
  //         .map((url: string) => url.replace(/\D/g, ''))
  //         .map((num: string) => +num);

  //       const final = output.map((num: any) => fetchPlanetsData(num));
  //       return final;
  //     }
  //   };

  //   fetchPlanets();
  // }, [data]);

  useEffect(() => {
    fetchPlanetsData(1)
    console.log(planetsData)
  }, [])

  if (data.length === 0)
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    )

  return (
    <Container>
      {data.map((obj) => {
        return (
          <Box key={obj.title}>
            <span>{obj.title}</span>
          </Box>
        )
      })}
    </Container>
  )
}
