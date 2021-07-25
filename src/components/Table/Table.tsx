import { FC } from 'react'

import { Planet } from 'types/Planet'

import {
  Container,
  Heading,
  HeadingName,
  Data,
  PlanetName,
  RotationPeriod,
  OrbitalPeriod,
  Diameter,
  Climate,
  SurfaceWater,
  Population,
} from './Table.style'

interface TableProps extends Planet {}

const Table: FC<TableProps> = ({
  name,
  rotation_period,
  orbital_period,
  diameter,
  climate,
  surface_water,
  population,
}) => {
  return (
    <Container>
      <Heading>
        <HeadingName>Planet Name</HeadingName>
        <HeadingName>Rotation period</HeadingName>
        <HeadingName>Orbital period</HeadingName>
        <HeadingName>Diameter</HeadingName>
        <HeadingName>Climate</HeadingName>
        <HeadingName>Surface water</HeadingName>
        <HeadingName>Population</HeadingName>
      </Heading>
      <Data>
        <PlanetName>asd</PlanetName>
        <RotationPeriod>asd</RotationPeriod>
        <OrbitalPeriod>asd</OrbitalPeriod>
        <Diameter>asd</Diameter>
        <Climate>asd</Climate>
        <SurfaceWater>asd</SurfaceWater>
        <Population>asd</Population>
      </Data>
    </Container>
  )
}

export default Table
