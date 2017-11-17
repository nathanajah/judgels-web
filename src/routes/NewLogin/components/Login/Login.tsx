import * as React from 'react';

import { LoginForm, LoginFormData } from './LoginForm';
import { SingleColumnLayout } from '../../../../layouts/SingleColumnLayout';
import { Card } from '../../../../components/Card';

import '../../../../styles/form.css';

export interface LoginProps {
  handleLogIn: (username: string, password: string) => void;
}

export class Login extends React.Component<LoginProps> {
  render() {
    return (
      <SingleColumnLayout>
        <Card title="Log in">
          <LoginForm onSubmit={this.handleLogIn}/>
        </Card>
      </SingleColumnLayout>
    );
  }

  private handleLogIn = (data: LoginFormData) => {
    this.props.handleLogIn(data.username, data.password);
  }
}
