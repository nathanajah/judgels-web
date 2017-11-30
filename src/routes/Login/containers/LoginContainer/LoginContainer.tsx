import * as React from 'react';
import { connect } from 'react-redux';

import { Login, LoginProps } from '../../components/Login/Login';
import { LoginFormData } from '../../components/LoginForm/LoginForm';
import { sessionActions as injectedSessionActions } from '../../../../actions/session';

const LoginContainer = (props: LoginProps) => (
  <Login {...props}/>
);

export function createLoginContainer(sessionActions) {
  const mapDispatchToProps = dispatch => ({
    handleLogIn: (data: LoginFormData) => dispatch(sessionActions.logIn(data)),
  });

  return connect(undefined, mapDispatchToProps)(LoginContainer);
}

export default createLoginContainer(injectedSessionActions);
