import * as React from 'react';
import { connect } from 'react-redux';

import { FullPageLayout } from '../../../components/layouts/FullPageLayout/FullPageLayout';
import UserRoute from '../../../components/UserRoute/UserRoute';
import { selectUserJid } from '../../../modules/session/sessionSelectors';
import ProfileContainer from './routes/profile/Profile/Profile';
import ChangePasswordContainer from './routes/changePassword/ChangePassword/ChangePassword';
import ChangeAvatarContainer from './routes/changeAvatar/ChangeAvatar/ChangeAvatar';
import ContentWithSidebarContainer, {
  ContentWithSidebarContainerItem,
  ContentWithSidebarContainerProps,
} from '../../../components/ContentWithSidebar/ContentWithSidebar';
import { withBreadcrumb } from '../../../components/BreadcrumbWrapper/BreadcrumbWrapper';

interface AccountContainerProps {
  userJid: string;
  location: {
    pathname: string;
  };
  match: {
    url: string;
  };
}
const AccountContainer = (props: AccountContainerProps) => {
  const sidebarItems: ContentWithSidebarContainerItem[] = [
    {
      id: 'profile',
      title: 'Profile',
      routeComponent: UserRoute,
      component: () => <ProfileContainer userJid={props.userJid} />,
    },
    {
      id: 'avatar',
      title: 'Change Avatar',
      routeComponent: UserRoute,
      component: () => <ChangeAvatarContainer userJid={props.userJid} />,
    },
    {
      id: 'password',
      title: 'Change Password',
      routeComponent: UserRoute,
      component: ChangePasswordContainer,
    },
  ];

  const contentWithSidebarContainerProps: ContentWithSidebarContainerProps = {
    title: 'My Account',
    items: sidebarItems,
    smallContent: true,
  };

  return (
    <FullPageLayout>
      <ContentWithSidebarContainer {...contentWithSidebarContainerProps} />
    </FullPageLayout>
  );
};

export function createAccountContainer() {
  const mapStateToProps = state => ({
    userJid: selectUserJid(state),
  });

  return connect(mapStateToProps)(AccountContainer);
}

export default withBreadcrumb('My account')(createAccountContainer());
