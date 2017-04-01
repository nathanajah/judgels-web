import React from 'react'
import { Container, Header, Input, Button, Icon } from 'semantic-ui-react'

export const UserProfileSearch = () => (
  <Container>
    <Header as='h3'>
      User Search
    </Header>
    <Input action fluid placeholder='username'>
      <input />
      <Button icon>
        <Icon name='search' />
      </Button>
    </Input>
  </Container>
)

export default UserProfileSearch
