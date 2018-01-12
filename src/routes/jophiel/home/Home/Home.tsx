import { Card, Icon } from '@blueprintjs/core';
import * as React from 'react';

import { SingleColumnLayout } from '../../../../components/layouts/SingleColumnLayout/SingleColumnLayout';

import './Home.css';

const redirectToUriel = () => (location.href = (window as any).env.URIEL_URL);
const redirectToJerahmeel = () => (location.href = (window as any).env.JERAHMEEL_URL);

export const Home = () => (
  <SingleColumnLayout>
    <h5 className="home__text">
      <Icon iconName="oil-field" className="home__icon" />
    </h5>
    <h5 className="home__text">Apologies! The new {(window as any).env.APP_NAME} site is still under construction.</h5>
    <p className="home__text home__text--small">Until then, you can access the legacy modules below:</p>
    <br />
    <Card interactive onClick={redirectToUriel}>
      <p className="home__link">
        <Icon iconName="walk" /> Competition Gate
      </p>
    </Card>
    <br />
    <Card interactive onClick={redirectToJerahmeel}>
      <p className="home__link">
        <Icon iconName="pulse" /> Training Gate
      </p>
    </Card>
  </SingleColumnLayout>
);
