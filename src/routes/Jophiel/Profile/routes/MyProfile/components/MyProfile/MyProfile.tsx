import * as React from 'react';

import { Card } from '../../../../../../../components/Card/Card';
import { UserInfo } from '../../../../../../../modules/api/jophiel/user';
import UserInfoForm from '../UserInfoForm/UserInfoForm';

import './MyProfile.css';

export interface MyProfileProps {
  userInfo: UserInfo;
  handleUpdateUserInfo: (userInfo: UserInfo) => Promise<void>;
}

export const MyProfile = (props: MyProfileProps) => (
  <Card title="My Profile" className="card-profile-me">
    <UserInfoForm onSubmit={props.handleUpdateUserInfo} initialValues={props.userInfo}/>
  </Card>
);
