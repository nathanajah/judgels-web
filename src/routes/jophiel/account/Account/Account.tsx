import * as React from 'react';
import { connect } from 'react-redux';

import { FullPageLayout } from '../../../../layouts/FullPageLayout/FullPageLayout';
import UserRoute from '../../../../containers/UserRoute/UserRoute';
import ProfileContainer from '../../panels/profile/Profile/Profile';
import { selectUserJid } from '../../../../modules/session/sessionSelectors';
import ChangeAvatarContainer from '../../panels/avatar/ChangeAvatar/ChangeAvatar';
import ChangePasswordContainer from '../routes/changePassword/ChangePassword/ChangePassword';
import ContentWithSidebarContainer, {
  ContentWithSidebarContainerItem,
  ContentWithSidebarContainerProps,
} from '../../../../containers/ContentWithSidebarContainer/ContentWithSidebarContainer';
import { withBreadcrumb } from '../../../../containers/BreadcrumbsWrapper/BreadcrumbsWrapper';

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
