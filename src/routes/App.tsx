import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import DocumentTitle from 'react-document-title';

import HeaderContainer from '../components/Header/Header';
import JophielContainer from './jophiel/Jophiel';
import { Menubar } from '../components/Menubar/Menubar';
import BreadcrumbsContainer from '../components/Breadcrumbs/Breadcrumbs';
import { Footer } from '../components/Footer/Footer';
import { webConfigActions as injectedWebConfigActions } from './jophiel/modules/webConfigActions';
import { AppState } from '../modules/store';
import { selectDocumentTitle } from '../modules/breadcrumbs/breadcrumbsSelectors';

interface AppContainerConnectedProps {
  title: string;
  onGetWebConfig: () => Promise<void>;
}

class AppContainer extends React.Component<AppContainerConnectedProps> {
  async componentDidMount() {
    await this.props.onGetWebConfig();
  }

  render() {
    return (
      <DocumentTitle title={this.props.title}>
        <div>
          <HeaderContainer />
          <Menubar />
          <BreadcrumbsContainer />
          <JophielContainer />
          <Footer />
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
