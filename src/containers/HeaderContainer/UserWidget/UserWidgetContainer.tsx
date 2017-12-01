import * as React from 'react';
import { connect } from 'react-redux';

import { UserWidget, UserWidgetProps } from '../../../components/Header/UserWidget/UserWidget';
import { logoutActions as injectedLogoutActions } from '../../../routes/jophiel/logout/modules/logoutActions';
import { AppState } from '../../../store/store';

const UserWidgetContainer = (props: UserWidgetProps) => (
  <UserWidget {...props}/>
);

export function createUserWidgetContainer(logoutActions) {
  const mapStateToProps = (state: AppState) => ({
    user: state.session.user,
  });

  const mapDispatchToProps = (dispatch) => ({
    handleLogOut: () => dispatch(logoutActions.logOut()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(UserWidgetContainer);
}

export default createUserWidgetContainer(injectedLogoutActions);
