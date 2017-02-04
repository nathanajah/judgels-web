import React from 'react'
import { connect } from 'react-redux'
import UserProfileWidget from '../components/UserProfileWidget'
import { logout } from '../store/session'

export class UserProfileWidgetContainer extends React.Component {
  _handleLogoutClick () {
    const { dispatch } = this.props
    dispatch(logout())
  }

  render () {
    const { currentUser } = this.props;
    return (
      <UserProfileWidget
        handleLogoutClick={::this._handleLogoutClick}
        key='UserProfileWidget'
        isAuthenticated={currentUser.isAuthenticated}
        isFetching={currentUser.isFetching}
        username={currentUser.username}
        realName={currentUser.realName} />
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
})

UserProfileWidgetContainer.propTypes = {
  currentUser: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

export default connect(mapStateToProps)(UserProfileWidgetContainer)
