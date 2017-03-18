import React from 'react'
import './Header.scss'
import Logo from 'commons/assets/images/logo.png'
import { Button, Divider, Dropdown, Image, Menu } from 'semantic-ui-react'
import faker from 'faker'

class Header extends React.Component {
  render () {
    const {
      handleClickLogin,
      handleClickRegister,
      handleClickLogout,
      isAuthenticated,
      isFetching,
      username,
      realName
    } = this.props

    let userWidget
    if (isFetching === true || isAuthenticated === true) {
      const trigger = (
        <span>
          <Image avatar src={faker.internet.avatar()} />&nbsp;
          <span>{isFetching ? 'loading...' : realName}</span><br />
          <small>{isFetching ? 'loading...' : `Username: ${username}`}</small>
        </span>
      )

      userWidget = (
        <Menu.Menu position='right'>
          <Dropdown trigger={trigger} item>
            {
              !isFetching &&
              isAuthenticated &&
              username &&
              realName &&
              (
                <Dropdown.Menu>
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleClickLogout}>Sign out</Dropdown.Item>
                </Dropdown.Menu>
              )
            }
          </Dropdown>
        </Menu.Menu>
      )
    } else {
      userWidget = (
        <Menu.Item position='right'>
          <Button inverted onClick={handleClickLogin}>Sign in</Button>&nbsp;
          <Button inverted onClick={handleClickRegister}>Sign up</Button>
        </Menu.Item>
      )
    }

    return (
      <Menu inverted color='blue'>
        <Menu.Item><Image size='mini' src={Logo} /></Menu.Item>
        <Menu.Item header><span>TLX | TOKI Learning Center</span></Menu.Item>
        {userWidget}
      </Menu>
    )
  }
}

Header.propTypes = {
  handleClickLogin: React.PropTypes.func.isRequired,
  handleClickRegister: React.PropTypes.func.isRequired,
  handleClickLogout: React.PropTypes.func.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  username: React.PropTypes.string,
  realName: React.PropTypes.string
}

export default Header
