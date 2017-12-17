import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { MyProfile } from '../../components/MyProfile/MyProfile';
import { UserInfo } from '../../../../../../../modules/api/jophiel/user';
import { userInfoActions as injectedUserInfoActions } from '../../modules/userInfoActions';

interface MyProfileContainerProps {
  handleGetUserInfo: () => Promise<UserInfo>;
  handleUpdateUserInfo: (userInfo: UserInfo) => Promise<void>;
}

interface MyProfileContainerState {
  userInfo?: UserInfo;
}

class MyProfileContainer extends React.Component<MyProfileContainerProps, MyProfileContainerState> {
  state: MyProfileContainerState = {};

  async componentDidMount() {
    const userInfo = await this.props.handleGetUserInfo();
    this.setState({ userInfo });
  }

  render() {
    return <MyProfile userInfo={this.state.userInfo} handleUpdateUserInfo={this.props.handleUpdateUserInfo}/>;
  }
}

export function createMyProfileContainer(userInfoActions) {
  const mapDispatchToProps = dispatch => ({
    handleGetUserInfo: () => dispatch(userInfoActions.getMine()),
    handleUpdateUserInfo: (userInfo: UserInfo) => dispatch(userInfoActions.updateMine(userInfo)),
  });

  return connect(undefined, mapDispatchToProps)(MyProfileContainer);
}

export default withRouter<any>(createMyProfileContainer(injectedUserInfoActions));
