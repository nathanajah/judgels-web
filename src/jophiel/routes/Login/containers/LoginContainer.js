import React from 'react'
import { connect } from 'react-redux'
import LoginView from '../components/LoginView'
import { login } from '../../../store/session'
import BreadcrumbWrapper from 'jophiel/hoc/BreadcrumbWrapper'

export class LoginContainer extends React.Component {
  constructor (props) {
    super(props)
    this._handleSubmitLogin = this._handleSubmitLogin.bind(this)
  }

  _handleSubmitLogin (data) {
    const { dispatch } = this.props
    const { usernameOrEmail, password } = data
    dispatch(login(usernameOrEmail, password))
  }

  render () {
    const { error } = this.props
    return (<LoginView handleSubmitLogin={this._handleSubmitLogin} error={error.login} />)
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  error: state.session.error
})

LoginContainer.propTypes = {
  dispatch: React.PropTypes.func,
  error: React.PropTypes.object
}

const ConnectedLoginContainer = connect(mapStateToProps)(LoginContainer)
const WrappedLoginContainer = BreadcrumbWrapper([{ label: 'Login', link: '#' }])(ConnectedLoginContainer)

export default WrappedLoginContainer
