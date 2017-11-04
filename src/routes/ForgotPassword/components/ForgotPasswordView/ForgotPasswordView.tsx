import * as React from 'react'
import './ForgotPasswordView.css'
import NavigationalLayout from 'layouts/NavigationalLayout'
import ForgotPasswordForm from '../ForgotPasswordForm'
import { Grid, Header, Message } from 'semantic-ui-react'

interface ForgotPasswordViewProps {
  handleSubmitForgotPassword: any;
  error: string;
  message: string;
}

export class ForgotPasswordView extends React.Component<ForgotPasswordViewProps> {
  render () {
    const { error, message } = this.props
    return (
      <NavigationalLayout>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Header as='h2'>Forgot Password</Header>
              { error && (
                <Message negative header='Error'
                  content={error} />) }
              { message && (
                <Message info
                  content={message} />) }
              <ForgotPasswordForm />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </NavigationalLayout>
    )
  }
}

export default ForgotPasswordView
