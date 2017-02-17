import React from 'react'
import { Field, reduxForm } from 'redux-form'

export class RegisterForm extends React.Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form method='POST' className='form-horizontal ' role='form' onSubmit={handleSubmit}>
        <div className='form-group' id='username_field'>
          <label className='control-label col-md-4' htmlFor='username'>Username</label>
          <div className='col-md-8'>
            <Field id='username' name='username' component='input' className='form-control'
              type='text' aria-describedby='username_info_0' />
            <span id='username_info_0' className='help-block'>This is the name you will log in with.</span>
          </div>
        </div>
        <div className='form-group' id='name_field'>
          <label className='control-label col-md-4' htmlFor='name'>Name</label>
          <div className='col-md-8'>
            <Field id='name' name='name' component='input' className='form-control' type='text' />
          </div>
        </div>
        <div className='form-group' id='email_field'>
          <label className='control-label col-md-4' htmlFor='email'>Email</label>
          <div className='col-md-8'>
            <Field id='email' name='email' component='input' aria-describedby='email_info_0'
              className='form-control' type='email' />
            <span id='email_info_0' className='help-block'>
              A verification email will be sent to this address, so make sure it is correct!
            </span>
          </div>
        </div>
        <div className='form-group' id='password_field'>
          <label className='control-label col-md-4' htmlFor='password'>Password</label>
          <div className='col-md-8'>
            <Field id='password' name='password' component='input'
              className='form-control zxcvbn match-src' type='password' />
          </div>
        </div>
        <div className='form-group' id='confirmPassword_field'>
          <label className='control-label col-md-4' htmlFor='confirmPassword'>Confirm Password</label>
          <div className='col-md-8'>
            <Field id='confirmPassword' name='confirmPassword' component='input'
              className='form-control match-tgt' type='password' />
          </div>
        </div>
        {/* TODO: captcha */}
        <div className='form-group'>
          <div className='col-md-8 col-md-offset-4'>
            <button type='submit' className='btn btn-primary'> Register </button>
          </div>
        </div>
      </form>
    )
  }
}

RegisterForm.propTypes = {
  handleSubmit: React.PropTypes.func
}

export default reduxForm({ form: 'register' })(RegisterForm)

