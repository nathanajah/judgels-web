import React from 'react'
import './RegisterView.scss'
import RegisterForm from '../RegisterForm'
import { Grid, Header, Message } from 'semantic-ui-react'

export class RegisterView extends React.Component {
  render () {
    const { handleSubmitRegister, error, message } = this.props
    return (
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
            <RegisterForm onSubmit={handleSubmitRegister} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
RegisterView.propTypes = {
  handleSubmitRegister: React.PropTypes.func,
  error: React.PropTypes.string,
  message: React.PropTypes.string
}
export default RegisterView
