import React from 'react'
import { Menu } from 'semantic-ui-react'
import LinkedClientsEntry from './LinkedClientsEntry'

export const LinkedClientsView = ({ clients }) => (
  <Menu secondary pointing>
    {
      clients.map(
        client => (
          <LinkedClientsEntry
            key={client.link}
            label={client.label}
            link={client.link}
          />
        )
      )
    }
  </Menu>
)

LinkedClientsView.propTypes = {
  clients: React.PropTypes.array
}

export default LinkedClientsView
