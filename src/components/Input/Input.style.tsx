import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &:nth-of-type(2) {
    margin-top: 0.9375rem;
  }
`
export const Label = styled.label`
  font-size: 0.75rem;
  color: #555;
`
export const TextInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #999;
  padding: 0.625rem 0;
  font-size: 1rem;
  font-family: 'Barlow', sans-serif;

  &.input__search {
    &:focus {
      background: #fdffe2;
    }
  }
`
export const SearchIcon = styled.img`
  position: absolute;
  right: 0.4375rem;
  bottom: 0.3125rem;
  cursor: pointer;
`
