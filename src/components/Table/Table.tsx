import { FC } from 'react'

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

interface TableProps {
  planetNames: any
  rotationPeriods: any
  oribtalPeriods: any
  diameters: any
  climates: any
  surfaceWaters: any
  populations: any
}

const Table: FC<TableProps> = ({
  planetNames,
  rotationPeriods,
  oribtalPeriods,
  diameters,
  climates,
  surfaceWaters,
  populations,
}) => {
  return (
    <Container>
      <Heading>
        <HeadingName>Planet Name</HeadingName>
        <HeadingName>Rotation period</HeadingName>
        <HeadingName>Oribal period</HeadingName>
        <HeadingName>Diameter</HeadingName>
        <HeadingName>Climate</HeadingName>
        <HeadingName>Surface water</HeadingName>
        <HeadingName>Population</HeadingName>
      </Heading>
      <Data>
        <PlanetName>
          {planetNames.map((planetName: any) => (
            <span>{planetName}</span>
          ))}
        </PlanetName>
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
