import * as React from 'react';

import HeaderContainer from '../HeaderContainer/HeaderContainer';
import JophielContainer from '../../routes/Jophiel/containers/JophielContainer/JophielContainer';
import { Footer } from '../../components/Footer/Footer';

const AppContainer = () => (
  <div>
    <HeaderContainer />
    <JophielContainer />
    <Footer />
  </div>
);

export default AppContainer;
