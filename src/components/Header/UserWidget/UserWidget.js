import React from 'react'
import { Button, Dropdown, Header, Image, Menu } from 'semantic-ui-react'
import faker from 'faker'
class UserWidget extends React.Component {
  render () {
    const {
      isFetching,
      isAuthenticated,
      username,
      realName,

      handleClickLogout,
      handleClickLogin,
      handleClickRegister
    } = this.props

    if (isFetching === true || isAuthenticated === true) {
      const trigger = (
        <Menu.Item>
          <Image avatar src={faker.internet.avatar()} />
          <Header size='tiny' style={{ margin: 0, fontWeight: 'normal', color: 'white' }}>
            {isFetching ? 'loading...' : realName}
            <Header.Subheader style={{ fontSize: '12px', color: '#d6d9da' }}>
              {isFetching ? 'loading...' : username}
            </Header.Subheader>
          </Header>
        </Menu.Item>
      )

      return (
        <Menu.Menu position='right'>
          <Dropdown trigger={trigger} item>
            {
              (!isFetching &&
              isAuthenticated &&
              username &&
              realName)
              ? (
                <Dropdown.Menu>
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleClickLogout}>Sign out</Dropdown.Item>
                </Dropdown.Menu>
              )
              : null
            }
          </Dropdown>
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Item position='right'>
          <Button inverted onClick={handleClickLogin}>Sign in</Button>&nbsp;
          <Button inverted onClick={handleClickRegister}>Sign up</Button>
        </Menu.Item>
      )
    }
  }
}

UserWidget.propTypes = {
  isFetching: React.PropTypes.bool.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
  username: React.PropTypes.string,
  realName: React.PropTypes.string,

  handleClickLogout: React.PropTypes.func.isRequired,
  handleClickLogin: React.PropTypes.func.isRequired,
  handleClickRegister: React.PropTypes.func.isRequired
}

export default UserWidget
