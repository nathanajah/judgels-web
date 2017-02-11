import React from 'react'
import './LoginView.scss'
import LoginForm from './LoginForm'
import { Link } from 'react-router'

export class LoginView extends React.Component {
  render () {
    const { handleSubmitLogin, error } = this.props
    return (
      <div className='col-md-12'>
        <h2>Log In</h2>
        { error && (<div className='alert alert-danger' role='alert'> {error} </div>) }
        <LoginForm onSubmit={handleSubmitLogin} />
        <Link to={'/forgotPassword'}>Forgot password</Link><br />
        Don't have account? <Link to={'/register'}>Register</Link>
      </div>
    )
  }
}
LoginView.propTypes = {
  handleSubmitLogin: React.PropTypes.func,
  error: React.PropTypes.string
}
export default LoginView
