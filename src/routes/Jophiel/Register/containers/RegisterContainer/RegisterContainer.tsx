import * as React from 'react';
import { connect } from 'react-redux';

import { Register, RegisterProps } from '../../components/Register/Register';
import { RegisterFormData } from '../../components/RegisterForm/RegisterForm';
import { SingleColumnLayout } from '../../../../../layouts/SingleColumnLayout/SingleColumnLayout';
import { UserRegistrationData } from '../../../../../modules/api/jophiel/user';
import { registerActions as injectedRegisterActions } from '../../modules/registerActions';
import { AppState } from '../../../../../modules/store';
import { selectRecaptchaSiteKey } from '../../../modules/webConfigSelectors';

const RegisterContainer = (props: RegisterProps) => (
  <SingleColumnLayout>
    <Register {...props} />
  </SingleColumnLayout>
);

export function createRegisterContainer(registerActions) {
  const mapStateToProps = (state: AppState) => ({
    recaptchaSiteKey: selectRecaptchaSiteKey(state),
  });

  const mapDispatchToProps = dispatch => ({
    onRegister: (data: RegisterFormData) => {
      const userRegistrationData: UserRegistrationData = {
        username: data.username,
        password: data.password,
        email: data.email,
        name: data.name,
        recaptchaResponse: data.recaptchaResponse,
      };
      return dispatch(registerActions.register(userRegistrationData));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
}

export default createRegisterContainer(injectedRegisterActions);
