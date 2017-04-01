import React from 'react'
import './Header.scss'
import Logo from 'commons/assets/images/logo.png'
import { Image, Menu } from 'semantic-ui-react'
import UserWidget from './UserWidget'

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

    return (
      <Menu inverted color='blue'>
        <Menu.Item><Image size='mini' src={Logo} /></Menu.Item>
        <Menu.Item header><span>TLX | TOKI Learning Center</span></Menu.Item>
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
