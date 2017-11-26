import { Button, FormGroup, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { Field, reduxForm, SubmitHandler } from 'redux-form';

export interface LoginFormData {
  username: string;
  password: string;
}

interface LoginFormProps {
  handleSubmit: SubmitHandler<LoginFormData>;
}

const LoginForm = (props: LoginFormProps) => (
  <form onSubmit={props.handleSubmit}>
    <FormGroup labelFor="username" label="Username/Email">
      <Field name="username" component="input" type="text" className="pt-input" />
    </FormGroup>
    <FormGroup labelFor="password" label="Password">
      <Field name="password" component="input" type="password" className="pt-input" required />
    </FormGroup>

    <Button type="submit" text="Log in" intent={Intent.PRIMARY}/>
  </form>
);

export default reduxForm<LoginFormData>({ form: 'login'})(LoginForm);
