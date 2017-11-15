import * as React from 'react'
import { connect } from 'react-redux'
import { LoginView } from '../../components/LoginView/LoginView'
import { login } from 'store/session'

interface LoginContainerProps {
  currentUser: {
    isAuthenticated: boolean;
    isFetching: boolean;
    username: string;
    realName: string;
  };
  dispatch: any;
  error: {
    login: string
  };
}

export class LoginContainer extends React.Component<LoginContainerProps> {
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

const ConnectedLoginContainer = connect<any>(mapStateToProps)(LoginContainer)

export default ConnectedLoginContainer
