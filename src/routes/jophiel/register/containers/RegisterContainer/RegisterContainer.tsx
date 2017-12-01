import * as React from 'react';
import { connect } from 'react-redux';

import { Register, RegisterProps } from '../../components/Register/Register';
import { RegisterFormData } from '../../components/RegisterForm/RegisterForm';
import { registerActions as injectedRegisterActions } from '../../modules/registerActions';

const RegisterContainer = (props: RegisterProps) => (
  <Register {...props}/>
);

export function createRegisterContainer(registerActions) {
  const mapDispatchToProps = dispatch => ({
    handleRegister: (data: RegisterFormData) => {
      return dispatch(registerActions.register(data.username, data.name, data.email, data.password));
    },
  });

  return connect(undefined, mapDispatchToProps)(RegisterContainer);
}

export default createRegisterContainer(injectedRegisterActions);
