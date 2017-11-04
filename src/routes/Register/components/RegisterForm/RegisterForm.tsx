import * as React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, Popup } from 'semantic-ui-react'

interface RegisterFormProps {
  handleSubmit?: any;
}

export class RegisterForm extends React.Component<RegisterFormProps> {
  render () {
    const { handleSubmit } = this.props
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <Popup
            trigger={
              <Field name='username' component='input'
                className='ui input' type='text' />
            }
            content='This is the name you will log in with.'
            on='focus'
          />
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <Field name='name' component='input' className='ui input' type='text' />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Popup
            trigger={
              <Field id='email' name='email' component='input'
                className='ui input' type='email' />
            }
            content='A verification email will be sent to this address, so make sure it is correct!'
            on='focus'
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Field name='password' component='input'
            className='ui input' type='password' />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <Field name='confirmPassword' component='input'
            className='ui input' type='password' />
        </Form.Field>
        {/* TODO: captcha */}
        <Button type='submit'>Register</Button>
      </Form>
    )
  }
}

export default reduxForm({ form: 'register' })(RegisterForm)
