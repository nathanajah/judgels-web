import * as React from 'react';
import { Route } from 'react-router-dom';

import { HeaderContainer } from './HeaderContainer';
import { LoginContainer } from '../routes/NewLogin/containers/LoginContainer';

export const AppContainer = () => (
  <div>
    <HeaderContainer />
    <Route exact path="/login" component={LoginContainer} />
  </div>
);
