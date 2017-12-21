import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Switch, withRouter } from 'react-router';
import { push } from 'react-router-redux';

import { TwoColumnSmallLayout } from '../../../../../layouts/TwoColumnSmallLayout/TwoColumnSmallLayout';
import { Sidebar, SidebarItem } from '../../../../../components/Sidebar/Sidebar';
import UserRoute from '../../../../../containers/UserRoute/UserRoute';
import ProfileContainer from '../../../containers/ProfileContainer/ProfileContainer';
import { selectUserJid } from '../../../../../modules/session/sessionSelectors';
import ChangePasswordContainer from '../../routes/ChangePassword/containers/ChangePasswordContainer/ChangePasswordContainer';

interface AccountContainerProps {
  userJid: string;
  onSidebarItemClick: (parentPath: string, itemId: string) => void;
  match: {
    url: string;
  };
}
const AccountContainer = (props: AccountContainerProps) => {
  const sidebarItems: SidebarItem[] = [
    { id: 'profile', title: 'Profile' },
    { id: 'password', title: 'Change Password' },
  ];

  return (
    <TwoColumnSmallLayout>
      <Sidebar
        id="account"
        title="My Account"
        parentPath={props.match.url}
        items={sidebarItems}
        onItemClick={props.onSidebarItemClick}
      />
      <div>
        <Switch>
          <Redirect exact from={props.match.url} to={'/account/profile'}/>
          <UserRoute
            exact
            path={'/account/profile'}
            component={() => <ProfileContainer userJid={props.userJid}/>}
          />
          <UserRoute exact path={'/account/password'} component={ChangePasswordContainer}/>
        </Switch>
      </div>
    </TwoColumnSmallLayout>
  );
};

function createAccountContainer() {
  const mapStateToProps = state => ({
    userJid: selectUserJid(state),
  });

  const mapDispatchToProps = dispatch => ({
    onSidebarItemClick: (parentPath: string, itemId: string) => dispatch(push(parentPath + '/' + itemId)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
}

export default withRouter<any>(createAccountContainer());
