import * as React from 'react';

import ForgotPasswordForm, { ForgotPasswordFormData } from '../ForgotPasswordForm/ForgotPasswordForm';
import { Card } from '../../../../../components/Card/Card';

export interface ForgotPasswordProps {
  onForgetPassword: (data: ForgotPasswordFormData) => Promise<void>;
}

interface ForgotPasswordState {
  submitted: boolean;
}

export class ForgotPassword extends React.Component<ForgotPasswordProps, ForgotPasswordState> {
  state: ForgotPasswordState = { submitted: false };

  render() {
    if (this.state.submitted) {
      return (
        <Card title="Forgot Password">
          <p data-key="instruction">An email has been sent to your email with instruction to reset your password.</p>
          <p>Please check your inbox/spam.</p>
        </Card>
      );
    } else {
      return (
        <Card title="Forgot Password">
          <ForgotPasswordForm onSubmit={this.onForgetPassword} />
        </Card>
      );
    }
  }

  private onForgetPassword = async (data: ForgotPasswordFormData) => {
    await this.props.onForgetPassword(data);
    this.setState({ submitted: true });
  };
}
