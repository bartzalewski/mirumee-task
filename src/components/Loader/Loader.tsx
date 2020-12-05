import React from 'react';
import styled from 'styled-components';
import loader from '../../images/loader.svg';

const Icon = styled.img`
  animation: spin 1s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader() {
  return <Icon src={loader} alt="Loading..." />;
}
