import * as React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import { Button, Form } from 'semantic-ui-react'

interface LoginFormProps extends InjectedFormProps {}

export class LoginForm extends React.Component<LoginFormProps> {
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

export default reduxForm<any>({ form: 'login' })(LoginForm)
