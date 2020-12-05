import React, { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import ArrowOpen from '../../images/arrow-open.svg';
import ArrowClose from '../../images/arrow-close.svg';

const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 14px 15px;
  box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
`;
const Title = styled.h4`
  color: #00687f;
  margin: 0;
`;
const Image = styled.img`
  cursor: pointer;
`;
const More = styled.div`
  width: 100%;
`;
const MoreDetails = styled.div`
  background: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const Head = styled.div`
  font-size: 12px;
`;

interface Props {
  children: ReactNode;
}

const Box: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

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
            <Image src={ArrowOpen} alt="Open" onClick={() => setOpen(true)} />
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
              <Row>
                <Head></Head>
                <Head></Head>
                <Head></Head>
                <Head></Head>
                <Head></Head>
                <Head></Head>
                <Head></Head>
              </Row>
            </MoreDetails>
          </More>
        )}
      </Container>
    </>
  );
};

export default Box;
