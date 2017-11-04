import * as React from 'react'
import './LoginView.css'
import NavigationalLayout from 'layouts/NavigationalLayout'
import LoginForm from '../LoginForm/index'
import { Link } from 'react-router'
import { Container, Grid, Header, Message } from 'semantic-ui-react'

interface LoginViewProps {
  handleSubmitLogin: any;
  error: string;
}

export class LoginView extends React.Component<LoginViewProps> {
  render () {
    const { error } = this.props
    return (
      <NavigationalLayout>
        <Container>
          <Grid>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Header as='h2'>Log In</Header>
                { error && (
                  <Message negative header='Error'
                    content={error} />) }
                <LoginForm />
                <Link to={'/forgotPassword'}>Forgot password</Link><br />
                Don't have account? <Link to={'/join'}>Register</Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </NavigationalLayout>
    )
  }
}

export default LoginView
