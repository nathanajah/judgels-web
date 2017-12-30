import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { UserProfile } from '../../../../modules/api/jophiel/user';
import { AppState } from '../../../../modules/store';
import { Profile } from '../../components/Profile/Profile';
import { profileActions as injectedProfileActions } from '../../modules/profileActions';
import { selectProfile } from '../../modules/profileSelectors';

interface ProfileContainerProps {
  userJid: string;
}

interface ProfileContainerConnectedProps {
  profile: UserProfile;
  onGetProfile: () => Promise<void>;
  onClearProfile: () => Promise<void>;
  onUpdateProfile: (profile: UserProfile) => Promise<void>;
}

class ProfileContainer extends React.Component<ProfileContainerConnectedProps> {
  async componentDidMount() {
    await this.props.onGetProfile();
  }

  async componentWillUnmount() {
    await this.props.onClearProfile();
  }

  render() {
    return <Profile profile={this.props.profile} onUpdateProfile={this.props.onUpdateProfile} />;
  }
}

export function createProfileContainer(profileActions) {
  const mapStateToProps = (state: AppState, ownProps: ProfileContainerProps) => ({
    profile: selectProfile(state, ownProps.userJid),
  });

  const mapDispatchToProps = (dispatch, ownProps: ProfileContainerProps) => ({
    onGetProfile: () => dispatch(profileActions.get(ownProps.userJid)),
    onClearProfile: () => dispatch(profileActions.clear(ownProps.userJid)),
    onUpdateProfile: (profile: UserProfile) => dispatch(profileActions.update(ownProps.userJid, profile)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
}

export default withRouter<any>(createProfileContainer(injectedProfileActions));
