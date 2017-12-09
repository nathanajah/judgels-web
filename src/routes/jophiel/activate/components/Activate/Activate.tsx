import * as React from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../../../../../components/Card/Card';
import { HorizontalDivider } from '../../../../../components/Divider/HorizontalDivider';
import { SingleColumnLayout } from '../../../../../layouts/SingleColumnLayout/SingleColumnLayout';

import './Activate.css';

export const Activate = () => (
  <SingleColumnLayout>
    <div className="card-activate">
      <Card title="Activation successful">
        <p>Your account has been activated.</p>

        <HorizontalDivider />

        <Link to="/login" as="button" className="pt-button pt-intent-primary">Log in</Link>
      </Card>
    </div>
  </SingleColumnLayout>
);
