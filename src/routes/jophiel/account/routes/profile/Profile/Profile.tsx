import * as React from 'react';

import ProfilePanel from '../../../../panels/profile/Profile/Profile';
import { withBreadcrumb } from '../../../../../../components/BreadcrumbWrapper/BreadcrumbWrapper';

interface ProfileProps {
  userJid: string;
}

export const Profile = (props: ProfileProps) => <ProfilePanel userJid={props.userJid} />;

const ProfileContainer = withBreadcrumb('Profile')(Profile);
export default ProfileContainer;
