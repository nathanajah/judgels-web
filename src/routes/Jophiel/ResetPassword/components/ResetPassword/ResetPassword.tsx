import * as React from 'react';

import { Card } from '../../../../../components/Card/Card';
import ResetPasswordForm, { ResetPasswordFormData } from '../ResetPasswordForm/ResetPasswordForm';

export interface ResetPasswordProps {
  onResetPassword: (data: ResetPasswordFormData) => Promise<void>;
}

export const ResetPassword = (props: ResetPasswordProps) => (
  <Card title="Reset Password">
    <ResetPasswordForm onSubmit={props.onResetPassword} />
  </Card>
);
