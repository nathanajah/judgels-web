import * as React from 'react'
import { Menu } from 'semantic-ui-react'

export interface NavigationEntryProps {
  link: string;
  label: string;
  active: boolean;
}

export const NavigationEntry = ({ link, label, active }: NavigationEntryProps) => (
  <Menu.Item active={active}>
    <a href={link}>{label}</a>
  </Menu.Item>
)

export default NavigationEntry
