import * as React from 'react';
import { connect } from 'react-redux';

import { ChangePassword, ChangePasswordProps } from '../../components/ChangePassword/ChangePassword';
import { ChangePasswordFormData } from '../../components/ChangePasswordForm/ChangePasswordForm';
import { changePasswordActions as injectedChangePasswordActions } from '../../modules/changePasswordActions';
import { withBreadcrumb } from '../../../../../../../containers/BreadcrumbsWrapper/BreadcrumbsWrapper';

const ChangePasswordContainer = (props: ChangePasswordProps) => <ChangePassword {...props} />;

export function createChangePasswordContainer(changePasswordActions) {
  const mapDispatchToProps = dispatch => ({
    onChangePassword: (data: ChangePasswordFormData) => {
      return dispatch(changePasswordActions.changePassword(data.oldPassword, data.password));
    },
  });

  return connect(undefined, mapDispatchToProps)(ChangePasswordContainer);
}

export default withBreadcrumb('Change password')(createChangePasswordContainer(injectedChangePasswordActions));
