import { Button, Intent } from '@blueprintjs/core';
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
    const action = this.state.isEditing
      ? undefined
      : <Button text="Edit" intent={Intent.PRIMARY} className="pt-small" onClick={this.toggleEdit}/>;

    return (
      <Card title="My Profile" action={action} className="card-profile-me">
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
      const onCancel = { onCancel: this.toggleEdit };
      return <UserInfoForm onSubmit={this.onSave} initialValues={userInfo} {...onCancel}/>;
    }
    return <UserInfoTable userInfo={userInfo}/>;
  };

  private toggleEdit = () => {
    this.setState((prevState: MyProfileState) => ({ isEditing: !prevState.isEditing }));
  };

  private onSave = async (userInfo: UserInfo) => {
    await this.props.onUpdateUserInfo(userInfo);
    this.setState({ isEditing: false });
  };
}
