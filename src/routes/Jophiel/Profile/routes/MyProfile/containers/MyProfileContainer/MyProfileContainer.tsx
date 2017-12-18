import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { MyProfile } from '../../components/MyProfile/MyProfile';
import { UserInfo } from '../../../../../../../modules/api/jophiel/user';
import { userInfoActions as injectedUserInfoActions } from '../../modules/userInfoActions';
import { ClearUserInfo } from '../../../../modules/profileReducer';
import { selectUserInfo } from '../../../../modules/profileSelectors';

interface MyProfileContainerProps {
  userInfo: UserInfo | undefined;
  onGetUserInfo: () => Promise<void>;
  onClearUserInfo: () => Promise<void>;
  onUpdateUserInfo: (userInfo: UserInfo) => Promise<void>;
}

class MyProfileContainer extends React.Component<MyProfileContainerProps> {
  async componentDidMount() {
    await this.props.onGetUserInfo();
  }

  async componentWillUnmount() {
    await this.props.onClearUserInfo();
  }

  render() {
    return <MyProfile userInfo={this.props.userInfo} onUpdateUserInfo={this.props.onUpdateUserInfo}/>;
  }
}

export function createMyProfileContainer(userInfoActions) {
  const mapStateToProps = state => ({
    userInfo: selectUserInfo(state),
  });

  const mapDispatchToProps = dispatch => ({
    onGetUserInfo: () => dispatch(userInfoActions.getMine()),
    onClearUserInfo: () => dispatch(ClearUserInfo.create()),
    onUpdateUserInfo: (userInfo: UserInfo) => dispatch(userInfoActions.updateMine(userInfo)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(MyProfileContainer);
}

export default withRouter<any>(createMyProfileContainer(injectedUserInfoActions));
