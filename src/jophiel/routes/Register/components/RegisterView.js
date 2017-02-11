import React from 'react'
import './RegisterView.scss'
import RegisterForm from './RegisterForm'

export class RegisterView extends React.Component {
  render () {
    const { handleSubmitRegister, error, message } = this.props
    return (
      <div className='col-md-12'>
        <h2>Register New Account</h2>
        { error && (<div className='alert alert-danger' role='alert'> {error} </div>) }
        { message && (<div className='alert alert-info' role='info'> {message} </div>) }
        <RegisterForm onSubmit={handleSubmitRegister} />
      </div>
    )
  }
}
RegisterView.propTypes = {
  handleSubmitRegister: React.PropTypes.func,
  error: React.PropTypes.string,
  message: React.PropTypes.string
}
export default RegisterView
