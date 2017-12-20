import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Switch, withRouter } from 'react-router';
import { push } from 'react-router-redux';

import { TwoColumnLayout } from '../../../../../layouts/TwoColumnLayout/TwoColumnLayout';
import { Sidebar, SidebarItem } from '../../../../../components/Sidebar/Sidebar';
import UserRoute from '../../../../../containers/UserRoute/UserRoute';
import ProfileContainer from '../../../containers/ProfileContainer/ProfileContainer';
import { selectUserJid } from '../../../../../modules/session/sessionSelectors';

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
  ];

  return (
    <TwoColumnLayout>
      <Sidebar
        id="account"
        title="My Account"
        parentPath={props.match.url}
        items={sidebarItems}
        onItemClick={props.onSidebarItemClick}
      />
      <div>
        <Switch>
          <Redirect exact from={props.match.url} to={props.match.url + '/profile'}/>
          <UserRoute
            exact
            path={props.match.url + '/profile'}
            component={() => <ProfileContainer userJid={props.userJid}/>}
          />
        </Switch>
      </div>
    </TwoColumnLayout>
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
