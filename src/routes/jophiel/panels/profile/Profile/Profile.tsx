import { Button, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { Card } from '../../../../../components/Card/Card';
import { UserProfile } from '../../../../../modules/api/jophiel/user';
import ProfileForm from '../ProfileForm/ProfileForm';
import { ProfileTable } from '../ProfileTable/ProfileTable';
import { AppState } from '../../../../../modules/store';
import { selectProfile } from '../../../modules/profileSelectors';
import { profileActions as injectedProfileActions } from '../../../modules/profileActions';

import './Profile.css';

export interface ProfileProps {
  profile?: UserProfile;
  onUpdateProfile: (profile: UserProfile) => Promise<void>;
}

interface ProfileState {
  isEditing: boolean;
}

export class Profile extends React.Component<ProfileProps, ProfileState> {
  state: ProfileState = { isEditing: false };

  render() {
    const action = this.state.isEditing ? (
      undefined
    ) : (
      <Button data-key="edit" text="Edit" intent={Intent.PRIMARY} className="pt-small" onClick={this.toggleEdit} />
    );

    return (
      <Card title="Profile" action={action} className="card-profile">
        {this.renderContent()}
      </Card>
    );
  }

  private renderContent = () => {
    const { profile } = this.props;
    if (!profile) {
      return null;
    }
    if (this.state.isEditing) {
      const onCancel = { onCancel: this.toggleEdit };
      return <ProfileForm onSubmit={this.onSave} initialValues={profile} {...onCancel} />;
    }
    return <ProfileTable profile={profile} />;
  };

  private toggleEdit = () => {
    this.setState((prevState: ProfileState) => ({
      isEditing: !prevState.isEditing,
    }));
  };

  private onSave = async (profile: UserProfile) => {
    await this.props.onUpdateProfile(profile);
    this.setState({ isEditing: false });
  };
}

interface ProfilePanelProps {
  userJid: string;
}

interface ProfilePanelConnectedProps {
  profile: UserProfile;
  onGetProfile: () => Promise<void>;
  onClearProfile: () => Promise<void>;
  onUpdateProfile: (profile: UserProfile) => Promise<void>;
}

class ProfilePanel extends React.Component<ProfilePanelConnectedProps> {
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

export function createProfilePanel(profileActions) {
  const mapStateToProps = (state: AppState, ownProps: ProfilePanelProps) => ({
    profile: selectProfile(state, ownProps.userJid),
  });

  const mapDispatchToProps = (dispatch, ownProps: ProfilePanelProps) => ({
    onGetProfile: () => dispatch(profileActions.get(ownProps.userJid)),
    onClearProfile: () => dispatch(profileActions.clear(ownProps.userJid)),
    onUpdateProfile: (profile: UserProfile) => dispatch(profileActions.update(ownProps.userJid, profile)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(ProfilePanel);
}

export default createProfilePanel(injectedProfileActions);
