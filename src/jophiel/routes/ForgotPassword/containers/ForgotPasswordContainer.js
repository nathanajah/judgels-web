import React from 'react'
import { connect } from 'react-redux'
import ForgotPasswordView from '../components/ForgotPasswordView'
import { forgotPassword } from '../../../store/session'

export class ForgotPasswordContainer extends React.Component {
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
    const { error, message } = this.props
    return (<ForgotPasswordView handleSubmitForgotPassword={this._handleSubmitForgotPassword}
      error={error.forgotPassword} message={message.forgotPassword} />)
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  error: state.session.error,
  message: state.session.message
})

ForgotPasswordContainer.propTypes = {
  dispatch: React.PropTypes.func,
  error: React.PropTypes.object,
  message: React.PropTypes.object
}

export default connect(mapStateToProps)(ForgotPasswordContainer)
