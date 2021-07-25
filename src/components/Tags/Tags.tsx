import { Dispatch, SetStateAction } from 'react'

import remove from 'images/delete.svg'

import Input from 'components/Input/Input'
import { List, Item, Title, Icon } from 'components/Tags/Tags.style'

import { Planet } from 'types/Planet'

type TagsProps = {
  tags: Planet[]
  removeTags: (indexToRemove: number) => never
  setSearch: Dispatch<SetStateAction<string>>
  setIsFocused: Dispatch<React.SetStateAction<boolean>>
}

export default function Tags({
  tags,
  removeTags,
  setSearch,
  setIsFocused,
}: TagsProps) {
  return (
    <>
      <List id="tags">
        {tags.map((tag, idx: number) => (
          <Item key={idx}>
            <Title>{tag.name}</Title>
            <Icon src={remove} alt="Delete" onClick={() => removeTags(idx)} />
          </Item>
        ))}
      </List>
      <Input
        label="Add Planet"
        placeholder="Search for the planet in database"
        isSearch
        setSearch={setSearch}
        setTitle={null}
        setIsFocused={setIsFocused}
      />
    </>
  )
}
