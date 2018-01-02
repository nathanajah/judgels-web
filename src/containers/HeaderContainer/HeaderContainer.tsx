import * as React from 'react';

import { Header } from '../../components/Header/Header';
import UserWidgetContainer from '../UserWidgetContainer/UserWidgetContainer';

const HeaderContainer = () => <Header userWidget={<UserWidgetContainer />} />;

export default HeaderContainer;
