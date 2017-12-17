import * as React from 'react';

import { Card } from '../../../../../../../components/Card/Card';
import { UserInfo } from '../../../../../../../modules/api/jophiel/user';
import UserInfoForm from '../UserInfoForm/UserInfoForm';
import { UserInfoTable } from '../UserInfoTable/UserInfoTable';

import './MyProfile.css';

export interface MyProfileProps {
  userInfo?: UserInfo;
  onUpdateUserInfo: (userInfo: UserInfo) => Promise<void>;
}

interface MyProfileState {
  isEditing: boolean;
}

export class MyProfile extends React.Component<MyProfileProps, MyProfileState> {
  state: MyProfileState = { isEditing: false };

  render() {
    return (
      <Card title="My Profile" className="card-profile-me">
        {this.renderContent()}
      </Card>
    );
  }

  private renderContent = () => {
    const { userInfo } = this.props;
    if (!userInfo) {
      return null;
    }
    if (this.state.isEditing) {
      return <UserInfoForm onSubmit={this.onUpdateUserInfo} initialValues={userInfo}/>;
    }
    return <UserInfoTable userInfo={userInfo} onEdit={this.onEdit}/>;
  };

  private onEdit = () => {
    this.setState({ isEditing: true });
  };

  private onUpdateUserInfo = async (userInfo: UserInfo) => {
    await this.props.onUpdateUserInfo(userInfo);
    this.setState({ isEditing: false });
  };
}
