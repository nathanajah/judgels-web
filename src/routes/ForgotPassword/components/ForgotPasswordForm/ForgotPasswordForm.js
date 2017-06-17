import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Form } from 'semantic-ui-react'

export class ForgotPasswordForm extends React.Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <Field name='username' component='input' className='ui input' type='text' />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Field name='email' component='input' className='ui input' type='text' />
        </Form.Field>
        <Button type='submit'>Change Password</Button>
      </Form>
    )
  }
}

ForgotPasswordForm.propTypes = {
  handleSubmit: React.PropTypes.func
}

export default reduxForm({ form: 'forgotPassword' })(ForgotPasswordForm)
