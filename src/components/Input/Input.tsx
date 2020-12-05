import React, { FC } from 'react';
import styled from 'styled-components';
import search from '../../images/search.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &:nth-of-type(2) {
    margin-top: 15px;
  }
`;
const Label = styled.label`
  font-size: 12px;
  color: #555;
`;
const TextInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #999;
  padding: 10px 0;
  font-size: 16px;
  font-family: 'Barlow', sans-serif;

  &.input__search {
    &:focus {
      background: #fdffe2;
    }
  }
`;
const SearchIcon = styled.img`
  position: absolute;
  right: 7px;
  bottom: 5px;
  cursor: pointer;
`;

interface Props {
  label: string;
  placeholder: string;
  isSearch: boolean;
  setIsFocused: any;
  setSearch: any;
  setTitle: any;
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
  );
};

export default Input;
