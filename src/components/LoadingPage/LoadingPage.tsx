import * as React from 'react';
import { SingleColumnLayout } from '../layouts/SingleColumnLayout/SingleColumnLayout';
import './LoadingPage.css';
import { Spinner } from '@blueprintjs/core';

const LoadingPage = () => (
  <SingleColumnLayout>
    <Spinner className="loading-spinner" />
  </SingleColumnLayout>
);

export default LoadingPage;
