import * as React from 'react';
import { Switch } from 'react-router';

import ActivateContainer from '../../Activate/containers/ActivateContainer/ActivateContainer';
import GuestRoute from '../../../../containers/GuestRoute/GuestRoute';
import LoginContainer from '../../Login/containers/LoginContainer/LoginContainer';
import RegisterContainer from '../../Register/containers/RegisterContainer/RegisterContainer';

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
