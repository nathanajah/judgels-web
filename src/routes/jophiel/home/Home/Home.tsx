import { Card, Icon } from '@blueprintjs/core';
import * as React from 'react';

import { FullPageLayout } from '../../../../components/layouts/FullPageLayout/FullPageLayout';

const redirectToUriel = () => (location.href = (window as any).env.URIEL_URL);
const redirectToJerahmeel = () => (location.href = (window as any).env.JERAHMEEL_URL);

export const Home = () => (
  <FullPageLayout>
    <Card>
      <h5>
        <Icon iconName="clipboard" />&nbsp;&nbsp;&nbsp;Apologies! The shiny new {(window as any).env.APP_NAME} site is
        under construction.&nbsp;&nbsp;&nbsp;<Icon iconName="automatic-updates" />
      </h5>
      <hr />
      <p>Until then, you can access the legacy modules below:</p>
      <br />
      <Card interactive onClick={redirectToUriel}>
        Competition Gate
      </Card>
      <br />
      <Card interactive onClick={redirectToJerahmeel}>
        Training Gate
      </Card>
    </Card>
  </FullPageLayout>
);
