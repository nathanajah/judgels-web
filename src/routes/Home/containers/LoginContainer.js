import React from 'react'
import { connect } from 'react-redux'
import LoginView from '../components/LoginView'
import { login } from '../../../store/session'

export class LoginContainer extends React.Component {
  _handleSubmitLogin (data) {
    const { dispatch } = this.props
    const { usernameOrEmail, password } = data
    dispatch(login(usernameOrEmail, password))
  }

  render () {
    const { error } = this.props;
    return (<LoginView handleSubmitLogin={::this._handleSubmitLogin} error={error.login}/>)
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  error: state.session.error
});

export default connect(mapStateToProps)(LoginContainer);
