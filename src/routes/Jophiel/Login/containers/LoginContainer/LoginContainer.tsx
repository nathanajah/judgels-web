import * as React from 'react';
import { connect } from 'react-redux';

import { Login, LoginProps } from '../../components/Login/Login';
import { LoginFormData } from '../../components/LoginForm/LoginForm';
import { SingleColumnLayout } from '../../../../../layouts/SingleColumnLayout/SingleColumnLayout';
import { loginActions as injectedLoginActions } from '../../modules/loginActions';

const LoginContainer = (props: LoginProps) => (
  <SingleColumnLayout>
    <Login {...props}/>
  </SingleColumnLayout>
);

export function createLoginContainer(loginActions) {
  const mapDispatchToProps = dispatch => ({
    onLogIn: (data: LoginFormData) => dispatch(loginActions.logIn(data.username, data.password)),
  });

  return connect(undefined, mapDispatchToProps)(LoginContainer);
}

export default createLoginContainer(injectedLoginActions);
