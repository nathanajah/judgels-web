import React from 'react'
import './Header.scss'
import Logo from 'assets/images/logo.png'
import { Dropdown, Image, Menu } from 'semantic-ui-react'
import faker from 'faker'

const trigger = (
  <span>
    <Image avatar src={faker.internet.avatar()} />&nbsp;
    <span>{faker.name.findName()}</span><br />
    <small> Username: {faker.internet.userName()}</small>
  </span>
)

const styles = {
  menu: {
    marginBottom: '0px'
  }
}

export const Header = () => (
  <Menu inverted color='blue' style={styles.menu}>
    <Menu.Item><Image size='mini' src={Logo} /></Menu.Item>
    <Menu.Item header><span>TLX | TOKI Learning Center</span></Menu.Item>
    <Menu.Menu position='right'>
      <Dropdown trigger={trigger} item>
        <Dropdown.Menu>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
)

export default Header
