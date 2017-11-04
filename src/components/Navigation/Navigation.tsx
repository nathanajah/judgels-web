import * as React from 'react'
import { NavigationEntry, NavigationEntryProps } from './NavigationEntry'
import { Container, Header, Menu } from 'semantic-ui-react'

interface NavigationProps {
  entries: NavigationEntryProps[];
}

export const Navigation = ({ entries }: NavigationProps) => (
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

export default Navigation
