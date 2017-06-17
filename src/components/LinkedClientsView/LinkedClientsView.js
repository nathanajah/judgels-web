import React from 'react'
import { Menu } from 'semantic-ui-react'
import LinkedClientsEntry from './LinkedClientsEntry'

export const LinkedClientsView = ({ clients, handleMoveHomepageTab }) => (
  <Menu secondary pointing>
    {
      clients.map(
        client => (
          <LinkedClientsEntry
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

LinkedClientsView.propTypes = {
  clients: React.PropTypes.array,
  handleMoveHomepageTab: React.PropTypes.func.isRequired
}

export default LinkedClientsView
