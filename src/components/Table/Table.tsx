import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Heading = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 20px;
`;
const HeadingName = styled.div``;
const Data = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 20px;
`;
const PlanetName = styled.span``;
const RotationPeriod = styled.span``;
const OrbitalPeriod = styled.span``;
const Diameter = styled.span``;
const Climate = styled.span``;
const SurfaceWater = styled.span``;
const Population = styled.span``;

interface Props {
  planetNames: any;
  rotationPeriods: any;
  oribtalPeriods: any;
  diameters: any;
  climates: any;
  surfaceWaters: any;
  populations: any;
}

const Table: FC<Props> = ({
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
  );
};

export default Table;
