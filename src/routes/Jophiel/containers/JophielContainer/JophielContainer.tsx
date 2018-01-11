import * as React from 'react';
import { Switch, withRouter } from 'react-router';

import GuestRoute from '../../../../containers/GuestRoute/GuestRoute';
import UserRoute from '../../../../containers/UserRoute/UserRoute';
import ActivateContainer from '../../Activate/containers/ActivateContainer/ActivateContainer';
import { Home } from '../../Home/components/Home/Home';
import LoginContainer from '../../Login/containers/LoginContainer/LoginContainer';
import LogoutContainer from '../../logout/Logout/Logout';
import RegisterContainer from '../../Register/containers/RegisterContainer/RegisterContainer';
import ForgotPasswordContainer from '../../ForgotPassword/containers/ForgotPasswordContainer/ForgotPasswordContainer';
import ResetPasswordContainer from '../../ResetPassword/containers/ResetPasswordContainer/ResetPasswordContainer';
import AccountContainer from '../../Account/containers/AccountContainer/AccountContainer';

const JophielContainer = () => (
  <div>
    <Switch>
      <UserRoute exact path="/" component={Home} />
      <GuestRoute exact path="/login" component={LoginContainer} />
      <UserRoute exact path="/logout" component={LogoutContainer} />
      <GuestRoute exact path="/register" component={RegisterContainer} />
      <GuestRoute exact path="/activate/:emailCode" component={ActivateContainer} />
      <GuestRoute exact path="/forgot-password" component={ForgotPasswordContainer} />
      <GuestRoute exact path="/reset-password/:emailCode" component={ResetPasswordContainer} />
      <UserRoute path="/account" component={AccountContainer} />
    </Switch>
  </div>
);

export default withRouter<any>(JophielContainer);
