import React from 'react'
import { Field, reduxForm } from 'redux-form'

export class ForgotPasswordForm extends React.Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form className='form-horizontal' role='form' onSubmit={handleSubmit}>
        <div className='form-group' id='username_field'>
          <label className='control-label col-md-4' htmlFor='username'>Username</label>
          <div className='col-md-8'>
            <Field id='username' name='username' component='input' className='form-control' type='text' />
          </div>
        </div>
        <div className='form-group' id='email_field'>
          <label className='control-label col-md-4' htmlFor='email'>Email</label>
          <div className='col-md-8'>
            <Field id='email' name='email' component='input' className='form-control' type='email' />
          </div>
        </div>
        <div className='form-group'>
          <div className='col-md-8 col-md-offset-4'>
            <button type='submit' className='btn btn-primary'> Change Password </button>
          </div>
        </div>
      </form>
    )
  }
}

ForgotPasswordForm.propTypes = {
  handleSubmit: React.PropTypes.func
}

export default reduxForm({ form: 'forgotPassword' })(ForgotPasswordForm)
