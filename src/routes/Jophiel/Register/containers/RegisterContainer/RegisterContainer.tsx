import * as React from 'react';
import { connect } from 'react-redux';

import { Register, RegisterProps } from '../../components/Register/Register';
import { RegisterFormData } from '../../components/RegisterForm/RegisterForm';
import { SingleColumnLayout } from '../../../../../layouts/SingleColumnLayout/SingleColumnLayout';
import { UserRegistrationData } from '../../../../../modules/api/jophiel/user';
import { registerActions as injectedRegisterActions } from '../../modules/registerActions';

const RegisterContainer = (props: RegisterProps) => (
  <SingleColumnLayout>
    <Register {...props}/>
  </SingleColumnLayout>
);

export function createRegisterContainer(registerActions) {
  const mapDispatchToProps = dispatch => ({
    handleRegister: (data: RegisterFormData) => {
      const userRegistrationData: UserRegistrationData = {
        username: data.username,
        password: data.password,
        email: data.email,
        name: data.name,
      };
      return dispatch(registerActions.register(userRegistrationData));
    },
  });

  return connect(undefined, mapDispatchToProps)(RegisterContainer);
}

export default createRegisterContainer(injectedRegisterActions);
