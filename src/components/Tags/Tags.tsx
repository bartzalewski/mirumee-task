import remove from '../../images/delete.svg'
import Input from '../Input/Input'

import { List, Item, Title, Icon } from 'components/Tags/Tags.style'

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
        isSearch
        setSearch={props.setSearch}
        setTitle={null}
        setIsFocused={props.setIsFocused}
      />
    </>
  )
}
