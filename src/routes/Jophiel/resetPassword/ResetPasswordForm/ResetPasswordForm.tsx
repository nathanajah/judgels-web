import { Button, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { FormTextInput } from '../../../../components/Form/FormTextInput/FormTextInput';
import { ConfirmPassword, Required } from '../../../../components/Form/FormValidations';
import { HorizontalDivider } from '../../../../components/Divider/HorizontalDivider/HorizontalDivider';
import { ActionButtons } from '../../../../components/ActionButtons/ActionButtons';

export interface ResetPasswordFormData {
  password: string;
  confirmPassword: string;
}

const newPasswordField = {
  name: 'password',
  label: 'New Password',
  type: 'password',
  validate: [Required],
};

const confirmNewPasswordField = {
  name: 'confirmPassword',
  label: 'Confirm New Password',
  type: 'password',
  validate: [Required, ConfirmPassword],
};

const ResetPasswordForm = (props: InjectedFormProps<ResetPasswordFormData>) => (
  <form onSubmit={props.handleSubmit}>
    <Field component={FormTextInput} {...newPasswordField} />
    <Field component={FormTextInput} {...confirmNewPasswordField} />

    <HorizontalDivider />

    <ActionButtons>
      <Button type="submit" text="Reset password" intent={Intent.PRIMARY} loading={props.submitting} />
    </ActionButtons>
  </form>
);

export default reduxForm<ResetPasswordFormData>({ form: 'resetPassword' })(ResetPasswordForm);
