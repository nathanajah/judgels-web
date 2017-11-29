import * as React from 'react';

import { Header } from '../../components/Header/Header';
import UserWidgetContainer from './UserWidget/UserWidgetContainer';

const HeaderContainer = () => (
  <Header userWidget={<UserWidgetContainer/>}/>
);

export default HeaderContainer;
