import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Form } from 'semantic-ui-react'

export class LoginForm extends React.Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Username or Email</label>
          <Field name='usernameOrEmail' component='input' className='ui input' type='text' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Field name='password' component='input' className='ui input' type='password' />
        </Form.Field>
        <Button type='submit'>Log In</Button>
      </Form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func
}

export default reduxForm({ form: 'login' })(LoginForm)
