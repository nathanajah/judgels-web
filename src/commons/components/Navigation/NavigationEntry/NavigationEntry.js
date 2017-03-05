import React from 'react'
import { Menu } from 'semantic-ui-react'

export const NavigationEntry = ({ link, label, active }) => (
  <Menu.Item active={active}>
    <a href={link}>{label}</a>
  </Menu.Item>
)

NavigationEntry.propTypes = {
  link: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  active: React.PropTypes.boolean
}

export default NavigationEntry
