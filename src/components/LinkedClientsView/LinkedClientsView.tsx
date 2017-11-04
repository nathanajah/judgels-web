import * as React from 'react'
import { Menu } from 'semantic-ui-react'
import { LinkedClientsEntry, LinkedClientsEntryProps } from './LinkedClientsEntry'

interface LinkedClientsViewProps {
  clients: LinkedClientsEntryProps[];
  currentPath: string;
  handleMoveHomepageTab: any;
}

export const LinkedClientsView = ({ clients, currentPath, handleMoveHomepageTab }: LinkedClientsViewProps) => (
  <Menu secondary stackable pointing style={{ borderBottomColor: 'white' }}>
    {
      clients.map(
        (client, idx) => (
          <LinkedClientsEntry
            styles={idx === 0 ? { marginLeft: '100px' } : {}}
            active={currentPath.indexOf(client.link) > -1}
            key={client.link}
            label={client.label}
            link={client.link}
            handleMoveHomepageTab={
              handleMoveHomepageTab}
          />
        )
      )
    }
  </Menu>
)

export default LinkedClientsView
