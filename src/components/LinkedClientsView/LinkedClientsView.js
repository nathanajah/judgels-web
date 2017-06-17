import React from 'react'
import { Menu } from 'semantic-ui-react'
import LinkedClientsEntry from './LinkedClientsEntry'

export const LinkedClientsView = ({ clients, currentPath, handleMoveHomepageTab }) => (
  <Menu secondary pointing style={{ borderBottomColor: 'white' }}>
    {
      clients.map(
        client => (
          <LinkedClientsEntry
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

LinkedClientsView.propTypes = {
  clients: React.PropTypes.array,
  currentPath: React.PropTypes.string,
  handleMoveHomepageTab: React.PropTypes.func.isRequired
}

export default LinkedClientsView
