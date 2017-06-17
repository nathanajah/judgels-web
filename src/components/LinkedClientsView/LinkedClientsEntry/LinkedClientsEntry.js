import React from 'react'
import { Menu } from 'semantic-ui-react'

export const LinkedClientsEntry = ({ label, link }) => (
  <Menu.Item href='#'>{label}</Menu.Item>
)

LinkedClientsEntry.propTypes = {
  label: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired
}

export default LinkedClientsEntry
