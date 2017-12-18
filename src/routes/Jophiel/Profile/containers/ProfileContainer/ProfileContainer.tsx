import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Switch, withRouter } from 'react-router';
import { push } from 'react-router-redux';

import { TwoColumnLayout } from '../../../../../layouts/TwoColumnLayout/TwoColumnLayout';
import { Sidebar, SidebarItem } from '../../../../../components/Sidebar/Sidebar';
import UserRoute from '../../../../../containers/UserRoute/UserRoute';
import MyProfileContainer from '../../routes/MyProfile/containers/MyProfileContainer/MyProfileContainer';

interface ProfileContainerProps {
  onSidebarItemClick: (parentPath: string, itemId: string) => void;
  match: {
    url: string;
  };
}
const ProfileContainer = (props: ProfileContainerProps) => {
  const sidebarItems: SidebarItem[] = [
    { id: 'me', title: 'My Profile' },
  ];

  return (
    <TwoColumnLayout>
      <Sidebar
        id="profile"
        title="Profile"
        parentPath={props.match.url}
        items={sidebarItems}
        onItemClick={props.onSidebarItemClick}
      />
      <div>
        <Switch>
          <Redirect exact from={props.match.url} to={props.match.url + '/me'}/>
          <UserRoute exact path={props.match.url + '/me'} component={MyProfileContainer}/>
        </Switch>
      </div>
    </TwoColumnLayout>
  );
};

const mapDispatchToProps = dispatch => ({
  onSidebarItemClick: (parentPath: string, itemId: string) => dispatch(push(parentPath + '/' + itemId)),
});

export default withRouter<any>(connect(undefined, mapDispatchToProps)(ProfileContainer));
