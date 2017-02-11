import React from 'react'
import { Field, reduxForm } from 'redux-form'

export class LoginForm extends React.Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form className='form-horizontal' method='post' role='form' onSubmit={handleSubmit}>
        <div className='form-group' id='usernameOrEmail_field'>
          <label className='control-label col-md-4' htmlFor='usernameOrEmail'>Username or Email</label>
          <div className='col-md-8'>
            <Field id='usernameOrEmail' name='usernameOrEmail' component='input' className='form-control' type='text' />
          </div>
        </div>
        <div className='form-group' id='password_field'>
          <label className='control-label col-md-4' htmlFor='password'>Password</label>
          <div className='col-md-8'>
            <Field id='password' name='password' component='input' className='form-control' type='password' />
          </div>
        </div>
        <div className='form-group'>
          <div className='col-md-8 col-md-offset-4'>
            <button className='btn btn-primary' type='submit'>Log In</button>
          </div>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func
}

export default reduxForm({ form: 'login' })(LoginForm)

