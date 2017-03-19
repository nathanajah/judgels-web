import React from 'react'
import avatarDefault from './avatar-default.png'
import { Link } from 'react-router'

export const UserProfileWidget = ({ handleLogoutClick, isFetching, isAuthenticated, username, realName }) => {
  let profileBox
  if (isFetching === true || isAuthenticated === true) {
    profileBox = (
      <div className='row'>
        <div className='col-md-4 col-xs-2'>
          <img className='avatar-picture' src={avatarDefault} alt='avatar' />
        </div>
        <div className='col-md-8 col-xs-10'>
          <div className='avatar-username'>
            {isFetching ? 'loading...' : username}
          </div>
          <div className='avatar-real-name'>
            {isFetching ? 'loading...' : realName}
          </div>
          {!isFetching && isAuthenticated && username && realName && <div className='row'>
            <div className='col-md-3 col-xs-1 avatar-menu'>
              <a href='#' className='btn btn-xs'>Edit</a>
            </div>
            <div className='col-md-9 col-xs-11 avatar-menu'>
              <a onClick={handleLogoutClick} className='btn btn-xs'>Log out</a>
            </div>
          </div>}
        </div>
      </div>
    )
  } else {
    profileBox = [
      <p key={'profileBoxGreeting'}>Hello, Guest</p>,
      <div key={'profileBoxNavigationMenu'} className='clearfix'>
        <div className='pull-left'>
          <Link to={'/register'} className='btn btn-default'>Register</Link>
        </div>
        <div className='pull-right'>
          <Link to={'/login'} className='btn btn-primary'>Login</Link>
        </div>
      </div>
    ]
  }

  return (
    <div className='avatar clearfix'>
      <div className='col-md-12'>
        { profileBox }
      </div>
    </div>
  )
}

UserProfileWidget.propTypes = {
  handleLogoutClick: React.PropTypes.func.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  username: React.PropTypes.string,
  realName: React.PropTypes.string
}

export default UserProfileWidget
