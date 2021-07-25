import styled from 'styled-components'

import { RED } from 'constants/colors'

export const Container = styled.div`
  padding: 0 1.875rem;
  width: 100%;
`
export const More = styled.div`
  width: 100%;
  padding: 0 1.875rem;
`
export const MoreDetails = styled.div`
  background: #fff;
  padding: 1.875rem 6.25rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  display: flex;
  flex-direction: column;
`
export const Image = styled.img`
  cursor: pointer;
  right: 0.9375rem;
  position: absolute;
`
export const List = styled.ul`
  list-style: none;
  padding: 0.6875rem;
  margin: 0;
  box-shadow: 0px 4px 4px rgba(196, 196, 196, 0.5);
  border: 1px solid #e5e5e5;
  max-height: 7.125rem;
  overflow-y: scroll;
`
export const Item = styled.li`
  cursor: pointer;
  padding: 5px 0;
`
export const Warning = styled.div`
  color: ${RED};
  border: 1px solid ${RED};
  padding: 0.625rem;
  font-size: 0.75rem;
`
