import * as React from 'react';

import LoginContainer from '../../login/containers/LoginContainer/LoginContainer';
import RegisterContainer from '../../register/containers/RegisterContainer/RegisterContainer';
import GuestRoute from '../../../../containers/GuestRoute/GuestRoute';
import { Switch } from 'react-router';

const JophielContainer = () => (
  <div>
    <Switch>
      <GuestRoute exact path="/login" component={LoginContainer}/>
      <GuestRoute exact path="/register" component={RegisterContainer}/>
    </Switch>
  </div>
);

export default JophielContainer;
