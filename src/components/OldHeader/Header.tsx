import * as React from 'react'
import './Header.css'
const Logo = require('assets/images/logo.png')
import { Image, Menu } from 'semantic-ui-react'
import UserWidget from './UserWidget/index'

interface HeaderProps {
  handleClickLogin: any;
  handleClickRegister: any;
  handleClickLogout: any;
  isAuthenticated: boolean;
  isFetching: boolean;
  username: string;
  realName: string;
}

class Header extends React.Component<HeaderProps> {
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

    return (
      <Menu inverted secondary color='blue' style={styles.menu}>
        <Menu.Item><Image size='mini' src={Logo} /></Menu.Item>
        <Menu.Item>
          <span>TLX</span>
          <span>&nbsp;|&nbsp;</span>
          <span style={{ fontWeight: 100 }}>TOKI Learning Center</span>
        </Menu.Item>
        <UserWidget isFetching={isFetching}
          isAuthenticated={isAuthenticated}
          username={username}
          realName={realName}
          handleClickLogout={handleClickLogout}
          handleClickLogin={handleClickLogin}
          handleClickRegister={handleClickRegister} />
      </Menu>
    )
  }
}

const styles = {
  menu: {
    marginBottom: '0px',
    borderRadius: '0',
    height: '2.85714286em'
  }
}

export default Header
