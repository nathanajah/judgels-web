import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router';
import DocumentTitle from 'react-document-title';

import Competition from './competition/Competition';
import HeaderContainer from '../components/Header/Header';
import LabsContainer from './labs/Labs';
import JophielContainer from './jophiel/Jophiel';
import { AppContent } from '../components/AppContent/AppContent';
import Menubar from '../components/Menubar/Menubar';
import BreadcrumbsContainer from '../components/Breadcrumbs/Breadcrumbs';
import { Footer } from '../components/Footer/Footer';
import { webConfigActions as injectedWebConfigActions } from './jophiel/modules/webConfigActions';
import { AppState } from '../modules/store';
import { selectDocumentTitle } from '../modules/breadcrumbs/breadcrumbsSelectors';

interface AppContainerConnectedProps {
  title: string;
  onGetWebConfig: () => Promise<void>;
}

const routeDefs = {
  home: {
    title: 'Home',
    route: {
      component: JophielContainer,
    },
  },
  competition: {
    title: 'Competition',
    route: {
      path: '/competition',
      component: Competition,
    },
  },
  labs: {
    title: 'Labs',
    route: {
      path: '/labs',
      component: LabsContainer,
    },
  },
};

const menubarRoutes = ['home', 'competition', 'labs'];

// So that "home" is the default option"
const contentRoutes = ['competition', 'labs', 'home'];

class AppContainer extends React.Component<AppContainerConnectedProps> {
  async componentDidMount() {
    await this.props.onGetWebConfig();
  }

  render() {
    return (
      <DocumentTitle title={this.props.title}>
        <div>
          <HeaderContainer />
          <Menubar items={routeDefs} matchOrder={contentRoutes} displayOrder={menubarRoutes} />
          <AppContent>
            <BreadcrumbsContainer />
            <Switch>{contentRoutes.map(id => <Route key={id} {...routeDefs[id].route} />)}</Switch>
            <Footer />
          </AppContent>
        </div>
      </DocumentTitle>
    );
  }
}

export function createAppContainer(webConfigActions) {
  const mapStateToProps = (state: AppState) => ({
    title: selectDocumentTitle(state),
  });
  const mapDispatchToProps = dispatch => ({
    onGetWebConfig: () => dispatch(webConfigActions.get()),
  });
  return withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));
}

export default createAppContainer(injectedWebConfigActions);
