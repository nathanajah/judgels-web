import * as React from 'react';
import { connect } from 'react-redux';

import { sessionActions as injectedSessionActions } from '../../../actions/session';
import { UserWidget, UserWidgetProps } from '../../../components/Header/UserWidget/UserWidget';
import { AppState } from '../../../store/index';

const UserWidgetContainer = (props: UserWidgetProps) => (
  <UserWidget {...props}/>
);

export function createUserWidgetContainer(sessionActions) {
  const mapStateToProps = (state: AppState) => ({
    user: state.session.user,
  });

  const mapDispatchToProps = (dispatch) => ({
    handleLogOut: (username: string) => dispatch(sessionActions.logOut(username)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(UserWidgetContainer);
}

export default createUserWidgetContainer(injectedSessionActions);
