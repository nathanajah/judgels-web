import * as React from 'react';

import RegisterForm, { RegisterFormData } from '../RegisterForm/RegisterForm';
import { Card } from '../../../../../components/Card/Card';
import { SingleColumnLayout } from '../../../../../layouts/SingleColumnLayout/SingleColumnLayout';

import './Register.css';

export interface RegisterProps {
  handleRegister: (data: RegisterFormData) => void;
}

export const Register = (props: RegisterProps) => (
  <SingleColumnLayout>
    <div className="card-register">
      <Card title="Register">
        <RegisterForm onSubmit={props.handleRegister}/>
      </Card>
    </div>
  </SingleColumnLayout>
);
