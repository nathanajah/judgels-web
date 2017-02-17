import React from 'react'
import './ForgotPasswordView.scss'
import ForgotPasswordForm from './ForgotPasswordForm'

export class ForgotPasswordView extends React.Component {
  render () {
    const { handleSubmitForgotPassword, error, message } = this.props
    return (
      <div className='col-md-12'>
        <h2>Forgot Password</h2>
        { error && (<div className='alert alert-danger' role='alert'> {error} </div>) }
        { message && (<div className='alert alert-info' role='info'> {message} </div>) }
        <ForgotPasswordForm onSubmit={handleSubmitForgotPassword} />
      </div>
    )
  }
}
ForgotPasswordView.propTypes = {
  handleSubmitForgotPassword: React.PropTypes.func,
  error: React.PropTypes.string,
  message: React.PropTypes.string
}
export default ForgotPasswordView
