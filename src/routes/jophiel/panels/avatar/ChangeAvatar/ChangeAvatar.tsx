import * as React from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';

import { Card } from '../../../../../components/Card/Card';
import { withBreadcrumb } from '../../../../../components/BreadcrumbWrapper/BreadcrumbWrapper';
import { AppState } from '../../../../../modules/store';
import { avatarActions as injectedAvatarActions } from '../../../modules/avatarActions';

import './ChangeAvatar.css';

export interface ChangeAvatarProps {
  currentAvatarUrl?: string;
  onDropAccepted: (files: File[]) => Promise<void>;
  onDropRejected: (files: File[]) => Promise<void>;
}

export const ChangeAvatar = (props: ChangeAvatarProps) => {
  const currentAvatar = props.currentAvatarUrl && (
    <div className="card-change-avatar__panel">
      <h4>Current avatar</h4>
      <img src={props.currentAvatarUrl} />
    </div>
  );

  const newAvatar = (
    <div className="card-change-avatar__panel">
      <h4>Upload new avatar</h4>
      <Dropzone
        accept="image/*"
        multiple={false}
        maxSize={100 * 1024}
        onDropAccepted={props.onDropAccepted}
        onDropRejected={props.onDropRejected}
      >
        <div className="card-change-avatar__dropzone">Click here or drop a new image (max 100 KB).</div>
      </Dropzone>
    </div>
  );

  return (
    <Card title="Change Avatar" className="card-change-avatar">
      <div className="card-change-avatar__content">
        {currentAvatar}
        {newAvatar}
      </div>
    </Card>
  );
};

interface ChangeAvatarContainerProps {
  userJid: string;
}

const ChangeAvatarContainer = (props: ChangeAvatarProps) => <ChangeAvatar {...props} />;

export function createChangeAvatarContainer(avatarActions) {
  const mapStateToProps = (state: AppState) => ({
    currentAvatarUrl: state.session.value && state.session.value.user.avatarUrl,
  });

  const mapDispatchToProps = (dispatch, ownProps: ChangeAvatarContainerProps) => ({
    onDropAccepted: (files: File[]) => dispatch(avatarActions.change(ownProps.userJid, files[0])),
    onDropRejected: (files: File[]) => dispatch(avatarActions.reject(files[0])),
  });

  return connect(mapStateToProps, mapDispatchToProps)(ChangeAvatarContainer);
}

export default withBreadcrumb('Change avatar')(createChangeAvatarContainer(injectedAvatarActions));
