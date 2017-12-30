import * as React from 'react';
import { connect } from 'react-redux';

import HeaderContainer from '../HeaderContainer/HeaderContainer';
import JophielContainer from '../../routes/Jophiel/containers/JophielContainer/JophielContainer';
import { Footer } from '../../components/Footer/Footer';
import { webConfigActions as injectedWebConfigActions } from '../../routes/Jophiel/modules/webConfigActions';
import { withRouter } from 'react-router';

interface AppContainerConnectedProps {
  onGetWebConfig: () => Promise<void>;
}

class AppContainer extends React.Component<AppContainerConnectedProps> {
  async componentDidMount() {
    await this.props.onGetWebConfig();
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <JophielContainer />
        <Footer />
      </div>
    );
  }
}

export function createAppContainer(webConfigActions) {
  const mapDispatchToProps = dispatch => ({
    onGetWebConfig: () => dispatch(webConfigActions.get()),
  });
  return withRouter(connect(undefined, mapDispatchToProps)(AppContainer));
}

export default createAppContainer(injectedWebConfigActions);
