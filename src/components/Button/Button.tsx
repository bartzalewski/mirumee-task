import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  background: #1ba1be;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 160px;
  height: 33px;
  font-weight: 700;
  font-family: 'Barlow', sans-serif;
  font-size: 12px;
  cursor: pointer;
  transition: 0.2s ease-out;
  align-self: flex-end;
  margin-top: 30px;

  &:hover {
    transition: 0.2s ease-out;
    opacity: 0.8;
  }
`;

export default function Button() {
  return <Container>ADD MOVIE</Container>;
}
