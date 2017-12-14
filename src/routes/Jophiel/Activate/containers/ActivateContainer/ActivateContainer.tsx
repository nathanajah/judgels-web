import { NonIdealState, Spinner } from '@blueprintjs/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { activateActions as injectedActivateActions } from '../../modules/activateActions';
import { SingleColumnLayout } from '../../../../../layouts/SingleColumnLayout/SingleColumnLayout';
import { Activate } from '../../components/Activate/Activate';

interface ActivateContainerProps {
  match: {
    params: {
      emailCode: string;
    };
  };
  handleActivate: (emailCode: string) => Promise<void>;
}

interface ActivateContainerState {
  isFetching: boolean;
}

class ActivateContainer extends React.Component<ActivateContainerProps, ActivateContainerState> {
  state: ActivateContainerState = {
    isFetching: true,
  };

  async componentDidMount() {
    await this.props.handleActivate(this.props.match.params.emailCode);
    this.setState({
      isFetching: false,
    });
  }

  render() {
    if (this.state.isFetching) {
      return (
        <SingleColumnLayout>
          <NonIdealState visual={<Spinner/>}/>
        </SingleColumnLayout>
      );
    }
    return <Activate />;
  }
}

export function createActivateContainer(activateActions) {
  const mapDispatchToProps = dispatch => ({
    handleActivate: (emailCode: string) => dispatch(activateActions.activate(emailCode)),
  });

  return connect(undefined, mapDispatchToProps)(ActivateContainer);
}

export default withRouter<any>(createActivateContainer(injectedActivateActions));
