import * as React from 'react';
import { connect } from 'react-redux';

import { Login } from '../components/Login';
import { sessionActions as realSessionActions } from '../../../actions/session';

interface LoginContainerProps {
  handleLogIn: (username: string, password: string) => void;
}

const LoginContainer = (props: LoginContainerProps) => (
  <Login handleLogIn={props.handleLogIn} />
);

export function createLoginContainer(sessionActions) {
  const mapDispatchToProps = dispatch => ({
    handleLogIn: (username: string, password: string) => dispatch(sessionActions.logIn(username, password)),
  });

  return connect(undefined, mapDispatchToProps)(LoginContainer);
}

export default createLoginContainer(realSessionActions);
