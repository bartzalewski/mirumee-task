import React from 'react';
import styled from 'styled-components';
import remove from '../../images/delete.svg';
import Input from '../Input/Input';

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;
const Item = styled.li`
  border-radius: 100px;
  border: 1px solid #999999;
  padding: 6px 16px;
  margin-right: 10px;
`;
const Title = styled.span`
  margin-right: 13px;
`;
const Icon = styled.img`
  cursor: pointer;
`;

export default function Tags(props: any) {
  return (
    <>
      <List id="tags">
        {props.tags.map((tag: string, index: number) => (
          <Item key={index}>
            <Title>{tag}</Title>
            <Icon
              src={remove}
              alt="Delete"
              onClick={() => props.removeTags(index)}
            />
          </Item>
        ))}
      </List>
      <Input
        label="Add Planet"
        placeholder="Seacrh for the planet in database"
        isSearch={true}
        setSearch={props.setSearch}
        setTitle={null}
        setIsFocused={props.setIsFocused}
      />
    </>
  );
}
