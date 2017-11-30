import * as React from 'react';

import LoginForm, { LoginFormData } from '../LoginForm/LoginForm';
import { Card } from '../../../../components/Card/Card';
import { SingleColumnLayout } from '../../../../layouts/SingleColumnLayout/SingleColumnLayout';

import './Login.css';

export interface LoginProps {
  handleLogIn: (data: LoginFormData) => void;
}

export const Login = (props: LoginProps) => (
  <SingleColumnLayout>
    <div className="card-login">
      <Card title="Log in">
        <LoginForm onSubmit={props.handleLogIn}/>
      </Card>
    </div>
  </SingleColumnLayout>
);
