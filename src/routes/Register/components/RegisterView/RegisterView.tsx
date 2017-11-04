import * as React from 'react'
import './RegisterView.css'
import RegisterForm from '../RegisterForm'
import NavigationalLayout from 'layouts/NavigationalLayout'
import { Grid, Header, Message } from 'semantic-ui-react'

interface RegisterViewProps {
  handleSubmitRegister: any;
  error: string;
  message: string;
}

export class RegisterView extends React.Component<RegisterViewProps> {
  render () {
    const { error, message } = this.props
    return (
      <NavigationalLayout>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Header as='h2'>Register New Account</Header>
              { error && (
                <Message negative header='Error'
                  content={error} />) }
              { message && (
                <Message info
                  content={message} />) }
              <RegisterForm/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </NavigationalLayout>
    )
  }
}

export default RegisterView
