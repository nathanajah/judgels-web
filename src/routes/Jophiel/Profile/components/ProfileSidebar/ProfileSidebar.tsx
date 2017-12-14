import { Tab2, Tabs2 } from '@blueprintjs/core';
import * as React from 'react';

import { Card } from '../../../../../components/Card/Card';

import '../../../../../styles/sidebar.css';

export const ProfileSidebar = () => (
  <Card title="Profile">
    <Tabs2 id="profile" vertical className="sidebar">
      <Tab2 id="my" title="My Profile"/>
    </Tabs2>
  </Card>
);
