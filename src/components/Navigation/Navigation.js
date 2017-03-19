import React from 'react'
import NavigationEntry from './NavigationEntry'
import { Container, Header, Menu } from 'semantic-ui-react'

export const Navigation = ({ entries }) => (
  <Container>
    <Header as='h3'>
      Navigation
    </Header>
    <Menu vertical secondary pointing fluid>
      {entries.map((entry, position) => (
        <NavigationEntry key={position} link={entry.link} label={entry.label} active={entry.active} />
      ))}
    </Menu>
  </Container>
)

Navigation.propTypes = {
  entries: React.PropTypes.array.isRequired
}

export default Navigation
