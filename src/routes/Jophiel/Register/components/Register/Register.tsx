import * as React from 'react';

import RegisterForm, { RegisterFormData } from '../RegisterForm/RegisterForm';
import { Card } from '../../../../../components/Card/Card';

import './Register.css';

export interface RegisterProps {
  onRegister: (data: RegisterFormData) => Promise<void>;
}

interface RegisterState {
  registeredUser?: {
    username: string;
    email: string;
  };
}

export class Register extends React.Component<RegisterProps, RegisterState> {
  state: RegisterState = {};

  render() {
    if (this.state.registeredUser) {
      return (
        <Card title="Activation Required" className="card-register">
          <p>Thank you for registering, <strong>{this.state.registeredUser.username}</strong>.</p>
          <p data-key="instruction" className="card-register__instruction">
            A confirmation email has been sent to&nbsp;
            <strong>{this.state.registeredUser.email}</strong> with instruction to activate your account.
          </p>
          <p>Please check your inbox/spam.</p>
        </Card>
      );
    } else {
      return (
        <Card title="Register" className="card-register">
          <RegisterForm onSubmit={this.onRegister}/>
        </Card>
      );
    }
  }

  private onRegister = async (data: RegisterFormData) => {
    await this.props.onRegister(data);
    this.setState({
      registeredUser: {
        username: data.username,
        email: data.email,
      },
    });
  }
}
