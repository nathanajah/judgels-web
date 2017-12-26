import * as React from 'react';
import { connect } from 'react-redux';

import { SingleColumnLayout } from '../../../../../layouts/SingleColumnLayout/SingleColumnLayout';
import { ForgotPassword, ForgotPasswordProps } from '../../components/ForgotPassword/ForgotPassword';
import { ForgotPasswordFormData } from '../../components/ForgotPasswordForm/ForgotPasswordForm';
import { forgotPasswordActions as injectedForgotPasswordActions } from '../../modules/forgotPasswordActions';

const ForgotPasswordContainer = (props: ForgotPasswordProps) => (
  <SingleColumnLayout>
    <ForgotPassword {...props}/>
  </SingleColumnLayout>
);

export function createForgotPasswordContainer(forgotPasswordActions) {
  const mapDispatchToProps = dispatch => ({
    onForgetPassword: (data: ForgotPasswordFormData) => dispatch(forgotPasswordActions.requestToReset(data.email)),
  });

  return connect(undefined, mapDispatchToProps)(ForgotPasswordContainer);
}

export default createForgotPasswordContainer(injectedForgotPasswordActions);
