import { Button, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { FormTextInput } from '../../../../../../../components/Form/FormTextInput/FormTextInput';
import { ConfirmPassword, Required } from '../../../../../../../components/Form/FormValidations';
import { HorizontalDivider } from '../../../../../../../components/Divider/HorizontalDivider/HorizontalDivider';

export interface ChangePasswordFormData {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

const oldPasswordField = {
  name: 'oldPassword',
  label: 'Old Password',
  type: 'password',
  validate: [Required],
};

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

const ChangePasswordForm = (props: InjectedFormProps<ChangePasswordFormData>) => (
  <form onSubmit={props.handleSubmit}>
    <Field component={FormTextInput} {...oldPasswordField} />
    <Field component={FormTextInput} {...newPasswordField} />
    <Field component={FormTextInput} {...confirmNewPasswordField} />

    <HorizontalDivider />

    <Button type="submit" text="Change password" intent={Intent.PRIMARY} loading={props.submitting} />
  </form>
);

export default reduxForm<ChangePasswordFormData>({ form: 'login' })(ChangePasswordForm);
