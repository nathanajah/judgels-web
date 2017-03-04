import React from 'react'
import './LoginView.scss'
import LoginForm from './LoginForm'
import { Link } from 'react-router'
import { Container, Grid, Header, Message } from 'semantic-ui-react'

export class LoginView extends React.Component {
  render () {
    const { handleSubmitLogin, error } = this.props
    return (
      <Container>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Header as='h2'>Log In</Header>
              { error && (
                <Message negative header='Error'
                  content={error} />) }
              <LoginForm onSubmit={handleSubmitLogin} />
              <Link to={'/forgotPassword'}>Forgot password</Link><br />
              Don't have account? <Link to={'/register'}>Register</Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}
LoginView.propTypes = {
  handleSubmitLogin: React.PropTypes.func,
  error: React.PropTypes.string
}
export default LoginView
