import * as React from 'react';

import { TwoColumnLayout } from '../../../../../layouts/TwoColumnLayout/TwoColumnLayout';
import { ProfileSidebar } from '../../components/ProfileSidebar/ProfileSidebar';
import { withRouter } from 'react-router';

const ProfileContainer = () => (
  <TwoColumnLayout>
    <ProfileSidebar/>
    <div></div>
  </TwoColumnLayout>
);

export default withRouter<any>(ProfileContainer);
