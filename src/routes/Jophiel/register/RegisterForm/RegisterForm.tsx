import { Button, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { FormTextInput } from '../../../../components/Form/FormTextInput/FormTextInput';
import { FormRecaptcha } from '../../../../components/Form/FormRecaptcha/FormRecaptcha';
import { ConfirmPassword, EmailAddress, Required, Username } from '../../../../components/Form/FormValidations';
import { HorizontalDivider } from '../../../../components/Divider/HorizontalDivider/HorizontalDivider';

import './RegisterForm.css';

export interface RegisterFormData {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  recaptchaResponse?: string;
}

const usernameField = {
  name: 'username',
  label: 'Username',
  required: true,
  validate: [Required, Username],
};

const nameField = {
  name: 'name',
  label: 'Name',
  validate: [Required],
};

const emailField = {
  name: 'email',
  label: 'Email',
  validate: [Required, EmailAddress],
};

const passwordField = {
  name: 'password',
  label: 'Password',
  type: 'password',
  validate: [Required],
};

const confirmPasswordField = {
  name: 'confirmPassword',
  label: 'Confirm Password',
  type: 'password',
  validate: [Required, ConfirmPassword],
};

export interface RegisterFormProps extends InjectedFormProps<RegisterFormData> {
  recaptchaSiteKey?: string;
}

const RegisterForm = (props: RegisterFormProps) => {
  let recaptchaChallengeField;
  if (props.recaptchaSiteKey) {
    const recaptchaField = {
      name: 'recaptchaResponse',
      siteKey: props.recaptchaSiteKey,
      validate: [Required],
    };
    recaptchaChallengeField = <Field component={FormRecaptcha} {...recaptchaField} />;
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={FormTextInput} {...usernameField} />
      <Field component={FormTextInput} {...nameField} />
      <Field component={FormTextInput} {...emailField} />
      <Field component={FormTextInput} {...passwordField} />
      <Field component={FormTextInput} {...confirmPasswordField} />
      {recaptchaChallengeField}

      <HorizontalDivider />

      <div className="form-login__actions">
        <Button type="submit" text="Register" intent={Intent.PRIMARY} loading={props.submitting} />
        <p className="form-login__actions-register">
          Have an account already? <Link to="/login">Log in now</Link>
        </p>
      </div>
    </form>
  );
};

export default reduxForm<RegisterFormData>({ form: 'register' })(RegisterForm);
