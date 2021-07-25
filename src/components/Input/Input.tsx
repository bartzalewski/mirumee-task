import { Dispatch, FC, SetStateAction } from 'react'
import search from 'images/search.svg'

import { Container, Label, TextInput, SearchIcon } from './Input.style'

interface Props {
  label: string
  placeholder: string
  isSearch: boolean
  setIsFocused: Dispatch<SetStateAction<boolean>> | null
  setSearch: Dispatch<SetStateAction<string>> | null
  setTitle: Dispatch<SetStateAction<string>> | null
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
            ? (e) => setSearch && setSearch(e.target.value)
            : (e) => setTitle && setTitle(e.target.value)
        }
        className={isSearch ? 'input__search' : ''}
        onFocus={
          isSearch ? () => setIsFocused && setIsFocused(true) : undefined
        }
      />
      {isSearch && <SearchIcon src={search} alt="Search Icon" />}
    </Container>
  )
}

export default Input
