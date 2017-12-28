import * as React from 'react';

import LoginForm, { LoginFormData } from '../LoginForm/LoginForm';
import { Card } from '../../../../../components/Card/Card';

import './Login.css';

export interface LoginProps {
  onLogIn: (data: LoginFormData) => Promise<void>;
}

export const Login = (props: LoginProps) => (
  <Card title="Log In" className="card-login">
    <LoginForm onSubmit={props.onLogIn} />
  </Card>
);
