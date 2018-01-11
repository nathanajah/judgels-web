import * as React from 'react';
import { connect } from 'react-redux';

import LoginForm, { LoginFormData } from '../LoginForm/LoginForm';
import { SingleColumnLayout } from '../../../../layouts/SingleColumnLayout/SingleColumnLayout';
import { Card } from '../../../../components/Card/Card';
import { loginActions as injectedLoginActions } from '../modules/loginActions';

import './Login.css';

export interface LoginProps {
  onLogIn: (data: LoginFormData) => Promise<void>;
}

export const Login = (props: LoginProps) => (
  <SingleColumnLayout>
    <Card title="Log In" className="card-login">
      <LoginForm onSubmit={props.onLogIn} />
    </Card>
  </SingleColumnLayout>
);

export function createLoginContainer(loginActions) {
  const mapDispatchToProps = dispatch => ({
    onLogIn: (data: LoginFormData) => dispatch(loginActions.logIn(data.username, data.password)),
  });

  return connect(undefined, mapDispatchToProps)(Login);
}

const LoginContainer = createLoginContainer(injectedLoginActions);
export default LoginContainer;
