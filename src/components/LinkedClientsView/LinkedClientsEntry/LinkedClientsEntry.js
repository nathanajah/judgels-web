import React from 'react'
import { Menu } from 'semantic-ui-react'

export const LinkedClientsEntry = ({ label, link, handleMoveHomepageTab }) => (
  <Menu.Item onClick={() => handleMoveHomepageTab(link)}>{label}</Menu.Item>
)

LinkedClientsEntry.propTypes = {
  label: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  handleMoveHomepageTab: React.PropTypes.func.isRequired
}

export default LinkedClientsEntry
