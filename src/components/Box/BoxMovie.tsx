import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 14px 15px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const Title = styled.h4`
  color: #00687f;
  margin: 0;
`;

interface Props {
  children: ReactNode;
}

const BoxMovie: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
};

export default BoxMovie;
