import * as React from 'react';
import { connect } from 'react-redux';

import { Login } from '../components/Login/Login';
import { logIn } from '../../../store/session';

interface LoginContainerProps {
  handleLogIn: (username: string, password: string) => void;
}

const mapDispatchToProps = dispatch => ({
  handleLogIn: (username: string, password: string) => dispatch(logIn(username, password)),
});

const LoginContainer = (props: LoginContainerProps) => (
    <Login handleLogIn={props.handleLogIn} />
);

export default connect(undefined, mapDispatchToProps)(LoginContainer);
