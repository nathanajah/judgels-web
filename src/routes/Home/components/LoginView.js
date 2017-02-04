import React from 'react'
import './LoginView.scss'
import LoginForm from './LoginForm'

export class LoginView extends React.Component {
  render() {
    const { handleSubmitLogin, error } = this.props;
    return (
      <div className="col-md-12">
        <h2>Log In</h2>
        { error && (<div className="alert alert-danger" role="alert"> {error} </div>) }
        <LoginForm onSubmit={handleSubmitLogin} />
        {/*<a href="/forgotPass" target="_blank">Forgot password</a><br />
        Don't have account? <a href="/register" target="_blank">Register</a> */}
      </div>
    );
  }
}
//todo bikin proptypes

export default LoginView
