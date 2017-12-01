import * as React from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from './HeaderContainer/HeaderContainer';
import LoginContainer from '../routes/jophiel/login/containers/LoginContainer/LoginContainer';
import RegisterContainer from '../routes/jophiel/register/containers/RegisterContainer/RegisterContainer';

export const AppContainer = () => (
  <div>
    <HeaderContainer />
    <Route exact path="/login" component={LoginContainer}/>
    <Route exact path="/register" component={RegisterContainer}/>
  </div>
);
