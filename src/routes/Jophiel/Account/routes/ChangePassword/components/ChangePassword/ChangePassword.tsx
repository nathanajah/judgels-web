import * as React from 'react';

import ChangePasswordForm, { ChangePasswordFormData } from '../ChangePasswordForm/ChangePasswordForm';
import { Card } from '../../../../../../../components/Card/Card';

export interface ChangePasswordProps {
  onChangePassword: (data: ChangePasswordFormData) => Promise<void>;
}

export const ChangePassword = (props: ChangePasswordProps) => (
  <Card title="Change Password" className="card-change-password">
    <ChangePasswordForm onSubmit={props.onChangePassword} />
  </Card>
);
