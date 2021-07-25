import { FC } from 'react'
import search from 'images/search.svg'

import { Container, Label, TextInput, SearchIcon } from './Input.style'

interface Props {
  label: string
  placeholder: string
  isSearch: boolean
  setIsFocused: any
  setSearch: any
  setTitle: any
}

const Input: FC<Props> = ({
  label,
  placeholder,
  isSearch,
  setIsFocused,
  setSearch,
  setTitle,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput
        type="text"
        placeholder={placeholder}
        onChange={
          isSearch
            ? (e) => setSearch(e.target.value)
            : (e) => setTitle(e.target.value)
        }
        className={isSearch ? 'input__search' : ''}
        onFocus={isSearch ? () => setIsFocused(true) : undefined}
      />
      {isSearch && <SearchIcon src={search} alt="Search Icon" />}
    </Container>
  )
}

export default Input
