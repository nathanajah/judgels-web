import * as React from 'react';
import { connect } from 'react-redux';

import { Login, LoginProps } from '../components/Login/Login';
import { sessionActions as injectedSessionActions } from '../../../actions/session';

const LoginContainer = (props: LoginProps) => (
  <Login {...props}/>
);

export function createLoginContainer(sessionActions) {
  const mapDispatchToProps = dispatch => ({
    handleLogIn: (username: string, password: string) => dispatch(sessionActions.logIn(username, password)),
  });

  return connect(undefined, mapDispatchToProps)(LoginContainer);
}

export default createLoginContainer(injectedSessionActions);
