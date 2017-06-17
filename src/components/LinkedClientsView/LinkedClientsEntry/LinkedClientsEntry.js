import React from 'react'
import { Menu } from 'semantic-ui-react'

export const LinkedClientsEntry = ({ label, link, active, handleMoveHomepageTab }) => (
  <Menu.Item style={{ fontWeight: 600 }} active={active} onClick={() => handleMoveHomepageTab(link)}>{label}</Menu.Item>
)

LinkedClientsEntry.propTypes = {
  label: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool,
  link: React.PropTypes.string.isRequired,
  handleMoveHomepageTab: React.PropTypes.func.isRequired
}

export default LinkedClientsEntry
