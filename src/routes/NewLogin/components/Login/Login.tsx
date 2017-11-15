import { Button, FormGroup, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { Card } from '../../../../components/Card/Card';

import '../../../../styles/form.css';

export const Login = () => (
  <Card title="Log in">
    <form>
      <FormGroup labelFor="login-username" label="Username/Email">
        <input id="login-username" type="text" className="pt-input" required />
      </FormGroup>
      <FormGroup labelFor="login-password" label="Password">
        <input id="login-password" type="password" className="pt-input" required />
      </FormGroup>

      <Button type="submit" text="Log in" intent={Intent.PRIMARY}/>
    </form>
  </Card>
);
