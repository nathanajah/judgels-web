import React from 'react'
import avatarDefault from './avatar-default.png'

export const UserProfileWidget = ({ username, realName }) => (
  <div className='avatar clearfix'>
    <div className='col-md-12'>
      <div className='row'>
        <div className='col-md-4 col-xs-2'>
          <img className='avatar-picture' src={avatarDefault} alt='avatar' />
        </div>
        <div className='col-md-8 col-xs-10'>
          <div className='avatar-username'>
            {username}
          </div>
          <div className='avatar-real-name'>
            {realName}
          </div>
          <div className='row'>
            <div className='col-md-3 col-xs-1 avatar-menu'>
              <a href='#' className='btn btn-xs'>Edit</a>
            </div>
            <div className='col-md-9 col-xs-11 avatar-menu'>
              <a href='#' className='btn btn-xs'>Log out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

UserProfileWidget.propTypes = {
  username: React.PropTypes.string.isRequired,
  realName: React.PropTypes.string.isRequired
}

export default UserProfileWidget
