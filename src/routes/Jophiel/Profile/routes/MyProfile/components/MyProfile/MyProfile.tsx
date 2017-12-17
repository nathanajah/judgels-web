import * as React from 'react';

import { Card } from '../../../../../../../components/Card/Card';
import { UserInfo } from '../../../../../../../modules/api/jophiel/user';
import UserInfoForm from '../UserInfoForm/UserInfoForm';
import { UserInfoTable } from '../UserInfoTable/UserInfoTable';

import './MyProfile.css';

export interface MyProfileProps {
  userInfo?: UserInfo;
  handleUpdateUserInfo: (userInfo: UserInfo) => Promise<void>;
}

interface MyProfileState {
  isEditing: boolean;
  userInfo?: UserInfo;
}

export class MyProfile extends React.Component<MyProfileProps, MyProfileState> {
  state: MyProfileState;

  constructor(props: MyProfileProps) {
    super(props);
    this.state = {
      isEditing: false,
      userInfo: props.userInfo,
    };
  }

  componentWillReceiveProps(props: MyProfileProps) {
    this.setState({ userInfo: props.userInfo });
  }

  render() {
    return (
      <Card title="My Profile" className="card-profile-me">
        {this.renderContent()}
      </Card>
    );
  }

  private renderContent = () => {
    const { isEditing, userInfo } = this.state;
    if (!userInfo) {
      return null;
    }
    if (isEditing) {
      return <UserInfoForm onSubmit={this.handleUpdateUserInfo} initialValues={userInfo}/>;
    }
    return <UserInfoTable userInfo={userInfo} onEdit={this.onEdit}/>;
  };

  private onEdit = () => {
    this.setState({ isEditing: true });
  };

  private handleUpdateUserInfo = async (userInfo: UserInfo) => {
    await this.props.handleUpdateUserInfo(userInfo);
    this.setState({
      isEditing: false,
      userInfo,
    });
  };
}
