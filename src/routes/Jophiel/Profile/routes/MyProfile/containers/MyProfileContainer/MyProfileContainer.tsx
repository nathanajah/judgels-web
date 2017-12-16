import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { MyProfile } from '../../components/MyProfile/MyProfile';

const MyProfileContainer = () => (
  <MyProfile/>
);

export function createMyProfileContainer() {
  return connect()(MyProfileContainer);
}

export default withRouter<any>(createMyProfileContainer());
