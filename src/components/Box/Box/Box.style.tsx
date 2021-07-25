import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  border-radius: 0.25rem;
  padding: 0.875rem 0.9375rem;
  box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
`
export const Title = styled.h4`
  color: #00687f;
  margin: 0;
`
export const Image = styled.img`
  cursor: pointer;
`
export const More = styled.div`
  width: 100%;
`
export const MoreDetails = styled.div`
  background: #fff;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  display: flex;
  flex-direction: column;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`
export const Head = styled.div`
  font-size: 0.75rem;
`
