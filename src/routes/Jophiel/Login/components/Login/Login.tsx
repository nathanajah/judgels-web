import * as React from 'react';

import LoginForm, { LoginFormData } from '../LoginForm/LoginForm';
import { Card } from '../../../../../components/Card/Card';

import './Login.css';

export interface LoginProps {
  handleLogIn: (data: LoginFormData) => Promise<void>;
}

export const Login = (props: LoginProps) => (
  <Card title="Log in" className="card-login">
    <LoginForm onSubmit={props.handleLogIn}/>
  </Card>
);
