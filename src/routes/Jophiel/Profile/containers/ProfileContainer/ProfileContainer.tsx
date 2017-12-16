import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Switch, withRouter } from 'react-router';
import { push } from 'react-router-redux';

import { TwoColumnLayout } from '../../../../../layouts/TwoColumnLayout/TwoColumnLayout';
import { Sidebar, SidebarItem } from '../../../../../components/Sidebar/Sidebar';
import UserRoute from '../../../../../containers/UserRoute/UserRoute';
import MyProfileContainer from '../../routes/MyProfile/containers/MyProfileContainer/MyProfileContainer';

interface ProfileContainerProps {
  sidebarOnItemClick: (parent: string, itemId: string) => void;
  match: {
    url: string;
  };
}
const ProfileContainer = (props: ProfileContainerProps) => {
  const sidebarItems: SidebarItem[] = [
    { id: 'me', title: 'My Profile' },
    { id: 'her', title: 'Her Profile' },
  ];

  return (
    <TwoColumnLayout>
      <Sidebar
        id="profile"
        title="Profile"
        parentPath={props.match.url}
        items={sidebarItems}
        onItemClick={props.sidebarOnItemClick}
      />
      <div>
        <Switch>
          <Redirect exact from={props.match.url} to={props.match.url + '/me'}/>
          <UserRoute exact path={props.match.url + '/me'} component={MyProfileContainer}/>
          <UserRoute exact path={props.match.url + '/her'} component={MyProfileContainer}/>
        </Switch>
      </div>
    </TwoColumnLayout>
  );
};

const mapDispatchToProps = dispatch => ({
  sidebarOnItemClick: (parent: string, itemId: string) => dispatch(push(parent + '/' + itemId)),
});

export default withRouter<any>(connect(undefined, mapDispatchToProps)(ProfileContainer));
