import * as React from 'react'
import { Menu } from 'semantic-ui-react'

export interface LinkedClientsEntryProps {
  label: string;
  active: boolean;
  link: string;
  styles: object;
  handleMoveHomepageTab: any;
}

export const LinkedClientsEntry = ({ label, link, active, styles, handleMoveHomepageTab }: LinkedClientsEntryProps) => (
  <Menu.Item
    style={{ ...styles, fontWeight: 600 }}
    active={active}
    color='blue'
    onClick={() => handleMoveHomepageTab(link)}>
    {label}
  </Menu.Item>
)

export default LinkedClientsEntry
