import { Intent } from '@blueprintjs/core';
import * as React from 'react';

import { ButtonLink } from '../../../../../components/ButtonLink/ButtonLink';
import { Card } from '../../../../../components/Card/Card';
import { HorizontalDivider } from '../../../../../components/Divider/HorizontalDivider';
import { SingleColumnLayout } from '../../../../../layouts/SingleColumnLayout/SingleColumnLayout';

import './Activate.css';

export const Activate = () => (
  <SingleColumnLayout>
    <Card title="Activation successful" className="card-activate">
      <p>Your account has been activated.</p>

      <HorizontalDivider />

      <ButtonLink to="/login" intent={Intent.PRIMARY}>Log in</ButtonLink>
    </Card>
  </SingleColumnLayout>
);
