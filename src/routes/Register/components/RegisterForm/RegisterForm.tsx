import { Button, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { Field, reduxForm, SubmitHandler } from 'redux-form';

import { FormTextInput } from '../../../../components/Form/FormTextInput/FormTextInput';
import { Required } from '../../../../components/Form/FormValidations';
import { HorizontalDivider } from '../../../../components/Divider/HorizontalDivider';

import '../../../../styles/form.css';

export interface RegisterFormData {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFormProps {
  handleSubmit: SubmitHandler<RegisterFormData>;
}

const usernameField = {
  name: 'username',
  label: 'Username',
  validate: [Required]
};

const nameField = {
  name: 'name',
  label: 'Name',
  validate: [Required]
};

const emailField = {
  name: 'email',
  label: 'Email',
  validate: [Required]
};

const passwordField = {
  name: 'password',
  label: 'Password',
  type: 'password',
  validate: [Required]
};

const confirmPasswordField = {
  name: 'confirmPassword',
  label: 'Confirm Password',
  type: 'password',
  validate: [Required]
};

const RegisterForm = (props: RegisterFormProps) => (
  <form onSubmit={props.handleSubmit}>
    <Field component={FormTextInput} {...usernameField}/>
    <Field component={FormTextInput} {...nameField}/>
    <Field component={FormTextInput} {...emailField}/>
    <Field component={FormTextInput} {...passwordField}/>
    <Field component={FormTextInput} {...confirmPasswordField}/>

    <HorizontalDivider />

    <Button type="submit" text="Register" intent={Intent.PRIMARY}/>
  </form>
);

export default reduxForm<RegisterFormData>({ form: 'register' })(RegisterForm);
