import * as React from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from './HeaderContainer/HeaderContainer';
import LoginContainer from '../routes/Login/containers/LoginContainer/LoginContainer';

export const AppContainer = () => (
  <div>
    <HeaderContainer />
    <Route exact path="/login" component={LoginContainer}/>
  </div>
);
