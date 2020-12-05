import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import BoxMovie from '../Box/BoxMovie';
import ArrowOpen from '../../images/arrow-open.svg';
import ArrowClose from '../../images/arrow-close.svg';
import Button from '../Button/Button';
import Tags from '../Tags/Tags';

const Container = styled.div`
  padding: 0 30px;
  width: 100%;
`;
const More = styled.div`
  width: 100%;
  padding: 0 30px;
`;
const MoreDetails = styled.div`
  background: #fff;
  padding: 30px 100px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  cursor: pointer;
  right: 15px;
  position: absolute;
`;
const List = styled.ul`
  list-style: none;
  padding: 11px;
  margin: 0;
  box-shadow: 0px 4px 4px rgba(196, 196, 196, 0.5);
  border: 1px solid #e5e5e5;
  max-height: 114px;
  overflow-y: scroll;
`;
const Item = styled.li`
  cursor: pointer;
  padding: 5px 0;
`;
const Warning = styled.div`
  color: #ff1616;
  border: 1px solid #ff1616;
  padding: 10px;
  font-size: 12px;
`;

export default function AddMovie() {
  const [open, setOpen] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [tags, setTags] = useState<any[]>([]);

  const warning = title && title[0] !== title[0].toUpperCase();

  const selectedTags = (tags: any) => tags;

  useEffect(() => {
    const urls = [
      'https://swapi.dev/api/planets/?page=1',
      'https://swapi.dev/api/planets/?page=2',
      'https://swapi.dev/api/planets/?page=3',
      'https://swapi.dev/api/planets/?page=4',
      'https://swapi.dev/api/planets/?page=5',
      'https://swapi.dev/api/planets/?page=6',
    ];

    const getData = (url: any) =>
      fetch(url)
        .then((res) => res.json())
        .then((data) => Promise.resolve(data.results));

    Promise.all(urls.map(getData)).then((arrays) => {
      const planets = arrays[0].concat(
        arrays[1],
        arrays[2],
        arrays[3],
        arrays[4],
        arrays[5]
      );
      setData(planets);
    });
  }, []);

  const removeTags = (indexToRemove: number) =>
    setTags([
      ...tags.filter((_: any, index: number) => index !== indexToRemove),
    ])!;

  const addTags = (tag: any) => {
    setTags([...tags, tag]);
    selectedTags([...tags, tag]);
  };

  const items = data
    .filter((data) => {
      if (search == null) {
        return data;
      } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
        return data;
      } else {
        return null;
      }
    })
    .map((data) => (
      <Item onClick={() => addTags(data.name)} key={data.name}>
        {data.name}
      </Item>
    ));

  return (
    <>
      <Container>
        <BoxMovie>
          Add movie
          {open ? (
            <Image
              src={ArrowClose}
              alt="Close"
              onClick={() => setOpen(false)}
            />
          ) : (
            <Image src={ArrowOpen} alt="Open" onClick={() => setOpen(true)} />
          )}
        </BoxMovie>
      </Container>
      {open && (
        <More>
          <MoreDetails>
            <Input
              label="Movie tittle"
              placeholder="Please enter the tittle of the movie"
              isSearch={false}
              setSearch={null}
              setTitle={setTitle}
              setIsFocused={null}
            />
            {warning ? (
              <Warning>
                Movie tittle name must start with a capital letter.
              </Warning>
            ) : null}
            <Tags
              selectedTags={selectedTags}
              tags={tags}
              setSearch={setSearch}
              isSearch={true}
              removeTags={removeTags}
              setIsFocused={setIsFocused}
            />
            {isFocused && (
              <List>{items && items.length > 0 ? items : 'Not found'}</List>
            )}
            <Button />
          </MoreDetails>
        </More>
      )}
    </>
  );
}
