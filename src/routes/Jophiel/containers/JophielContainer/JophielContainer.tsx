import * as React from 'react';
import { Switch, withRouter } from 'react-router';

import GuestRoute from '../../../../containers/GuestRoute/GuestRoute';
import UserRoute from '../../../../containers/UserRoute/UserRoute';
import ActivateContainer from '../../Activate/containers/ActivateContainer/ActivateContainer';
import LoginContainer from '../../Login/containers/LoginContainer/LoginContainer';
import RegisterContainer from '../../Register/containers/RegisterContainer/RegisterContainer';
import ProfileContainer from '../../Profile/containers/ProfileContainer/ProfileContainer';

const JophielContainer = () => (
  <div>
    <Switch>
      <GuestRoute exact path="/login" component={LoginContainer}/>
      <GuestRoute exact path="/register" component={RegisterContainer}/>
      <GuestRoute exact path="/activate/:emailCode" component={ActivateContainer}/>
      <UserRoute path="/profile" component={ProfileContainer}/>
    </Switch>
  </div>
);

export default withRouter<any>(JophielContainer);
