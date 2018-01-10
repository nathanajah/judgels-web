import * as React from 'react';
import Dropzone from 'react-dropzone';

import { Card } from '../../../../components/Card/Card';

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
