import styled from 'styled-components'

import { DARK_GREY, GREY } from 'constants/colors'

export const Container = styled.div`
  background: ${GREY};
  width: 49.375rem;
  min-height: 41.6875rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Image = styled.img`
  margin-top: 1.875rem;
  justify-self: flex-start;
`
export const Copyright = styled.span`
  color: ${DARK_GREY};
  font-weight: 300;
  font-size: 0.75rem;
  margin-top: 2.3856rem;
  margin-bottom: 1.875rem;
`
export const HR = styled.img`
  margin: 2rem 0;
`
