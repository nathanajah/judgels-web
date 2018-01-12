import * as React from 'react';

import ChangeAvatarPanel from '../../../../panels/avatar/ChangeAvatar/ChangeAvatar';
import { withBreadcrumb } from '../../../../../../components/BreadcrumbWrapper/BreadcrumbWrapper';

interface ChangeAvatarProps {
  userJid: string;
}

export const ChangeAvatar = (props: ChangeAvatarProps) => <ChangeAvatarContainer userJid={props.userJid} />;

const ChangeAvatarContainer = withBreadcrumb('Change avatar')(ChangeAvatarPanel);
export default ChangeAvatarContainer;
