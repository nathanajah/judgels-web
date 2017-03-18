import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Header from 'commons/components/Header'
import { logout } from '../store/session'

export class JophielHeaderContainer extends React.Component {
  constructor (props) {
    super(props)
    this._handleClickLogin = this._handleClickLogin.bind(this)
    this._handleClickRegister = this._handleClickRegister.bind(this)
    this._handleClickLogout = this._handleClickLogout.bind(this)
  }

  _handleClickLogin () {
    const { dispatch } = this.props
    dispatch(push(`/login`))
  }

  _handleClickRegister () {
    const { dispatch } = this.props
    dispatch(push(`/join`))
  }

  _handleClickLogout () {
    const { dispatch } = this.props
    dispatch(logout())
  }

  render () {
    const { currentUser } = this.props
    return (
      <Header
        handleClickLogin={this._handleClickLogin}
        handleClickRegister={this._handleClickRegister}
        handleClickLogout={this._handleClickLogout}
        isAuthenticated={currentUser.isAuthenticated}
        isFetching={currentUser.isFetching}
        username={currentUser.username}
        realName={currentUser.realName}
      />
    )
  }
}

JophielHeaderContainer.propTypes = {
  currentUser: React.PropTypes.shape({
    isAuthenticated: React.PropTypes.bool.isRequired,
    isFetching: React.PropTypes.bool.isRequired,
    username: React.PropTypes.string,
    realName: React.PropTypes.string
  }).isRequired,
  dispatch: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
})

export default connect(mapStateToProps)(JophielHeaderContainer)
