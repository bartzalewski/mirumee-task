import { useState, useEffect } from 'react'

import Input from 'components/Input/Input'
import BoxMovie from 'components/Box/BoxMovie/BoxMovie'
import Button from 'components/Button/Button'
import Tags from 'components/Tags/Tags'

import ArrowOpen from 'images/arrow-open.svg'
import ArrowClose from 'images/arrow-close.svg'

import {
  Container,
  More,
  MoreDetails,
  Image,
  List,
  Item,
  Warning,
} from './AddMovie.style'

export default function AddMovie() {
  const [open, setOpen] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [data, setData] = useState<any[]>([])
  const [search, setSearch] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [tags, setTags] = useState<any[]>([])

  const warning = title && title[0] !== title[0].toUpperCase()

  const selectedTags = (tags: any) => tags

  useEffect(() => {
    const urls = [
      'https://swapi.dev/api/planets/?page=1',
      'https://swapi.dev/api/planets/?page=2',
      'https://swapi.dev/api/planets/?page=3',
      'https://swapi.dev/api/planets/?page=4',
      'https://swapi.dev/api/planets/?page=5',
      'https://swapi.dev/api/planets/?page=6',
    ]

    const getData = (url: any) =>
      fetch(url)
        .then((res) => res.json())
        .then((data) => Promise.resolve(data.results))

    Promise.all(urls.map(getData)).then((arrays) => {
      const planets = arrays[0].concat(
        arrays[1],
        arrays[2],
        arrays[3],
        arrays[4],
        arrays[5]
      )
      setData(planets)
    })
  }, [])

  const removeTags = (indexToRemove: number) =>
    setTags([
      ...tags.filter((_: any, index: number) => index !== indexToRemove),
    ])!

  const addTags = (tag: any) => {
    setTags([...tags, tag])
    selectedTags([...tags, tag])
  }

  const items = data
    .filter((data) => {
      if (search == null) {
        return data
      } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
        return data
      } else {
        return null
      }
    })
    .map((data) => (
      <Item onClick={() => addTags(data.name)} key={data.name}>
        {data.name}
      </Item>
    ))

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
              isSearch
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
  )
}
