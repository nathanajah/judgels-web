import * as React from 'react';
import { connect } from 'react-redux';

import { Login, LoginProps } from '../../components/Login/Login';
import { LoginFormData } from '../../components/LoginForm/LoginForm';
import { loginActions as injectedLoginActions } from '../../modules/loginActions';

const LoginContainer = (props: LoginProps) => (
  <Login {...props}/>
);

export function createLoginContainer(loginActions) {
  const mapDispatchToProps = dispatch => ({
    handleLogIn: (data: LoginFormData) => dispatch(loginActions.logIn(data.username, data.password)),
  });

  return connect(undefined, mapDispatchToProps)(LoginContainer);
}

export default createLoginContainer(injectedLoginActions);