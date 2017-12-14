import * as React from 'react';
import { connect } from 'react-redux';

import { Register, RegisterProps } from '../../components/Register/Register';
import { RegisterFormData } from '../../components/RegisterForm/RegisterForm';
import { SingleColumnLayout } from '../../../../../layouts/SingleColumnLayout/SingleColumnLayout';
import { UserData } from '../../../../../modules/api/jophiel/user';
import { registerActions as injectedRegisterActions } from '../../modules/registerActions';

const RegisterContainer = (props: RegisterProps) => (
  <SingleColumnLayout>
    <Register {...props}/>
  </SingleColumnLayout>
);

export function createRegisterContainer(registerActions) {
  const mapDispatchToProps = dispatch => ({
    handleRegister: (data: RegisterFormData) => {
      const userData: UserData = {
        username: data.username,
        password: data.password,
        name: data.name,
        email: data.email,
      };
      return dispatch(registerActions.register(userData));
    },
  });

  return connect(undefined, mapDispatchToProps)(RegisterContainer);
}

export default createRegisterContainer(injectedRegisterActions);
