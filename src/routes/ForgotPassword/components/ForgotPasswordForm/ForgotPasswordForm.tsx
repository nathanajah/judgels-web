import * as React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Button, Form } from 'semantic-ui-react'

interface ForgotPasswordFormProps extends InjectedFormProps {}

export class ForgotPasswordForm extends React.Component<ForgotPasswordFormProps> {
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

export default reduxForm<any>({ form: 'forgotPassword' })(ForgotPasswordForm)
