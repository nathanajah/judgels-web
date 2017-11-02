import React from 'react'
import { Menu } from 'semantic-ui-react'

export const LinkedClientsEntry = ({ label, link, active, styles, handleMoveHomepageTab }) => (
  <Menu.Item
    style={{ ...styles, fontWeight: 600 }}
    active={active}
    color='blue'
    onClick={() => handleMoveHomepageTab(link)}>
    {label}
  </Menu.Item>
)

LinkedClientsEntry.propTypes = {
  label: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool,
  link: React.PropTypes.string.isRequired,
  styles: React.PropTypes.object,
  handleMoveHomepageTab: React.PropTypes.func.isRequired
}

export default LinkedClientsEntry
