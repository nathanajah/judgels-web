import * as React from 'react';

import LoginForm, { LoginFormData } from './LoginForm';
import { Card } from '../../../../components/Card/Card';
import { SingleColumnLayout } from '../../../../layouts/SingleColumnLayout/SingleColumnLayout';

import './Login.css';

export interface LoginProps {
  handleLogIn: (username: string, password: string) => void;
}

export class Login extends React.Component<LoginProps> {
  render() {
    return (
      <SingleColumnLayout>
        <div className="card-login">
          <Card title="Log in">
            <LoginForm onSubmit={this.handleLogIn}/>
          </Card>
        </div>
      </SingleColumnLayout>
    );
  }

  private handleLogIn = (data: LoginFormData) => {
    this.props.handleLogIn(data.username, data.password);
  }
}
