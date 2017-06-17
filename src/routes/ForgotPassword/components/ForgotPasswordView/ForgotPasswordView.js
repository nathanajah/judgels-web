import React from 'react'
import './ForgotPasswordView.scss'
import ForgotPasswordForm from '../ForgotPasswordForm'
import { Grid, Header, Message } from 'semantic-ui-react'

export class ForgotPasswordView extends React.Component {
  render () {
    const { handleSubmitForgotPassword, error, message } = this.props
    return (
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
            <ForgotPasswordForm onSubmit={handleSubmitForgotPassword} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
ForgotPasswordView.propTypes = {
  handleSubmitForgotPassword: React.PropTypes.func,
  error: React.PropTypes.string,
  message: React.PropTypes.string
}
export default ForgotPasswordView
