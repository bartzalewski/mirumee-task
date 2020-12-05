import React from 'react';
import styled from 'styled-components';
import Card from './components/Card/Card';
import GlobalStyle from './theme/globalStyle';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Card />
    </Container>
  );
}

export default App;
