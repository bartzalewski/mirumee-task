import styled from 'styled-components'

import { DARK_GREY } from 'constants/colors'

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`
export const Item = styled.li`
  border-radius: 6.25rem;
  border: 1px solid ${DARK_GREY};
  padding: 0.375rem 1rem;
  margin-right: 0.625rem;
`
export const Title = styled.span`
  margin-right: 0.8125rem;
`
export const Icon = styled.img`
  cursor: pointer;
`
