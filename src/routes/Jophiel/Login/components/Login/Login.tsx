import * as React from 'react';

import LoginForm, { LoginFormData } from '../LoginForm/LoginForm';
import { Card } from '../../../../../components/Card/Card';
import { SingleColumnLayout } from '../../../../../layouts/SingleColumnLayout/SingleColumnLayout';

import './Login.css';

export interface LoginProps {
  handleLogIn: (data: LoginFormData) => Promise<void>;
}

export const Login = (props: LoginProps) => (
  <SingleColumnLayout>
    <Card title="Log in" className="card-login">
      <LoginForm onSubmit={props.handleLogIn}/>
    </Card>
  </SingleColumnLayout>
);
