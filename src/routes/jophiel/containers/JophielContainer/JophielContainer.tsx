import * as React from 'react';
import { Switch } from 'react-router';

import ActivateContainer from '../../activate/containers/ActivateContainer/ActivateContainer';
import GuestRoute from '../../../../containers/GuestRoute/GuestRoute';
import LoginContainer from '../../login/containers/LoginContainer/LoginContainer';
import RegisterContainer from '../../register/containers/RegisterContainer/RegisterContainer';

const JophielContainer = () => (
  <div>
    <Switch>
      <GuestRoute exact path="/login" component={LoginContainer}/>
      <GuestRoute exact path="/register" component={RegisterContainer}/>
      <GuestRoute exact path="/activate/:emailCode" component={ActivateContainer}/>
    </Switch>
  </div>
);

export default JophielContainer;
