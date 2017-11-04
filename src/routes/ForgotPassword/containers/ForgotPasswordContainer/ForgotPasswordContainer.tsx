import * as React from 'react'
import { connect } from 'react-redux'
import ForgotPasswordView from '../../components/ForgotPasswordView'
import { forgotPassword } from '../../modules/forgotPassword'

interface ForgotPasswordContainerProps {
  dispatch: any;
  forgotPassword: {
    error: string;
    message: string;
  };
}

export class ForgotPasswordContainer extends React.Component<ForgotPasswordContainerProps> {
  constructor (props) {
    super(props)
    this._handleSubmitForgotPassword = this._handleSubmitForgotPassword.bind(this)
  }

  _handleSubmitForgotPassword (data) {
    const { dispatch } = this.props
    const { username, email } = data
    dispatch(forgotPassword(username, email))
  }

  render () {
    const { forgotPassword } = this.props
    return (<ForgotPasswordView handleSubmitForgotPassword={this._handleSubmitForgotPassword}
      error={forgotPassword.error} message={forgotPassword.message} />)
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  forgotPassword: state.forgotPassword
})

export default connect<any>(mapStateToProps)(ForgotPasswordContainer)
