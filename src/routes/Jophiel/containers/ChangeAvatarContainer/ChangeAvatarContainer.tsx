import * as React from 'react';
import { connect } from 'react-redux';

import { ChangeAvatar, ChangeAvatarProps } from '../../components/ChangeAvatar/ChangeAvatar';
import { avatarActions as injectedAvatarActions } from '../../modules/avatarActions';
import { withBreadcrumb } from '../../../../containers/BreadcrumbsWrapper/BreadcrumbsWrapper';
import { AppState } from '../../../../modules/store';

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
