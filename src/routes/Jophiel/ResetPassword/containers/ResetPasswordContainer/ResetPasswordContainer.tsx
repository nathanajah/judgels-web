import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { SingleColumnLayout } from '../../../../../layouts/SingleColumnLayout/SingleColumnLayout';
import { ResetPassword } from '../../components/ResetPassword/ResetPassword';
import { resetPasswordActions as injectedResetPasswordActions } from '../../modules/resetPasswordActions';
import { ResetPasswordFormData } from '../../components/ResetPasswordForm/ResetPasswordForm';

interface ResetPasswordContainerConnectedProps {
  match: {
    params: {
      emailCode: string;
    };
  };

  onResetPassword: (emailCode: string, data: ResetPasswordFormData) => Promise<void>;
}

class ResetPasswordContainer extends React.Component<ResetPasswordContainerConnectedProps> {
  render() {
    return (
      <SingleColumnLayout>
        <ResetPassword onResetPassword={this.onResetPassword} />
      </SingleColumnLayout>
    );
  }

  private onResetPassword = async (data: ResetPasswordFormData) => {
    return await this.props.onResetPassword(this.props.match.params.emailCode, data);
  };
}

export function createResetPasswordContainer(resetPasswordActions) {
  const mapDispatchToProps = dispatch => ({
    onResetPassword: (emailCode: string, data: ResetPasswordFormData) => {
      return dispatch(resetPasswordActions.reset(emailCode, data.password));
    },
  });

  return withRouter<any>(connect(undefined, mapDispatchToProps)(ResetPasswordContainer));
}

export default createResetPasswordContainer(injectedResetPasswordActions);
