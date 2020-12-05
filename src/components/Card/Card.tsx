import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo.svg';
import BoxList from '../Box/BoxList';
import Line from '../../images/line.svg';
import AddMovie from '../AddMovie/AddMovie';

const Container = styled.div`
  background: #e0e6ee;
  width: 790px;
  min-height: 667px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  margin-top: 30px;
  justify-self: flex-start;
`;
const Copyright = styled.span`
  color: #999;
  font-weight: 300;
  font-size: 12px;
  margin-top: 38.17px;
  margin-bottom: 30px;
`;
const HR = styled.img`
  margin: 32px 0;
`;

export default function Card() {
  return (
    <Container>
      <Image src={Logo} alt="Logo" />
      <BoxList />
      <HR src={Line} alt="Line" />
      <AddMovie />
      <Copyright>COPYRIGHT &copy; 2019 MIRUMEE SOFTWARE</Copyright>
    </Container>
  );
}
