import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { UserWidget, UserWidgetProps } from '../../../components/Header/UserWidget/UserWidget';
import { AppState } from '../../../modules/store';
import { logoutActions as injectedLogoutActions } from '../../../routes/Jophiel/Logout/modules/logoutActions';

const UserWidgetContainer = (props: UserWidgetProps) => <UserWidget {...props} />;

export function createUserWidgetContainer(logoutActions) {
  const mapStateToProps = (state: AppState) => ({
    user: state.session.value && state.session.value.user,
  });

  const mapDispatchToProps = dispatch => ({
    onClickAccount: () => dispatch(push('/account')),
    onClickLogOut: () => dispatch(logoutActions.logOut()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(UserWidgetContainer);
}

export default createUserWidgetContainer(injectedLogoutActions);
