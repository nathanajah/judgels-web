import * as React from 'react'
import { Button, Dropdown, Header, Image, Menu } from 'semantic-ui-react'
import * as faker from 'faker'

interface UserWidgetProps {
  isFetching: boolean;
  isAuthenticated: boolean;
  username: string;
  realName: string;

  handleClickLogout: any;
  handleClickLogin: any;
  handleClickRegister: any;
}

class UserWidget extends React.Component<UserWidgetProps> {
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
          <Header size='tiny' style={{ marin: 0, fontWeight: 'normal', color: 'white' }}>
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

export default UserWidget
