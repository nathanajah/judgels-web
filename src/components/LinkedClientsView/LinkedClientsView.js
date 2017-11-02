import React from 'react'
import { Menu } from 'semantic-ui-react'
import LinkedClientsEntry from './LinkedClientsEntry'

export const LinkedClientsView = ({ clients, currentPath, handleMoveHomepageTab }) => (
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

LinkedClientsView.propTypes = {
  clients: React.PropTypes.array,
  currentPath: React.PropTypes.string,
  handleMoveHomepageTab: React.PropTypes.func.isRequired
}

export default LinkedClientsView
