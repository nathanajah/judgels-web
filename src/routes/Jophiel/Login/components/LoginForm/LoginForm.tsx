import { Button, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { FormTextInput } from '../../../../../components/Form/FormTextInput/FormTextInput';
import { HorizontalDivider } from '../../../../../components/Divider/HorizontalDivider';
import { Required } from '../../../../../utils/validations';

import './LoginForm.css';

export interface LoginFormData {
  username: string;
  password: string;
}

const usernameField = {
  name: 'username',
  label: 'Username',
  validate: [Required],
};

const passwordField = {
  name: 'password',
  label: 'Password',
  type: 'password',
  validate: [Required],
};

const LoginForm = (props: InjectedFormProps<LoginFormData>) => (
  <form onSubmit={props.handleSubmit}>
    <Field component={FormTextInput} {...usernameField}/>
    <Field component={FormTextInput} {...passwordField}/>

    <HorizontalDivider />

    <div className="form-login__actions">
      <Button type="submit" text="Log in" intent={Intent.PRIMARY} loading={props.submitting}/>
      <p className="form-login__actions-register">Don't have account? <Link to="/register">Register now</Link></p>
    </div>
  </form>
);

export default reduxForm<LoginFormData>({ form: 'login' })(LoginForm);
