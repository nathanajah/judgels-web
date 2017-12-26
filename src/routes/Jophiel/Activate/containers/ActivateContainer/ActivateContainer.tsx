import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { activateActions as injectedActivateActions } from '../../modules/activateActions';
import { SingleColumnLayout } from '../../../../../layouts/SingleColumnLayout/SingleColumnLayout';
import { Activate } from '../../components/Activate/Activate';

interface ActivateContainerConnectedProps {
  match: {
    params: {
      emailCode: string;
    };
  };

  onActivate: (emailCode: string) => Promise<void>;
}

interface ActivateContainerState {
  isFetching: boolean;
}

class ActivateContainer extends React.Component<ActivateContainerConnectedProps, ActivateContainerState> {
  state: ActivateContainerState = {
    isFetching: true,
  };

  async componentDidMount() {
    await this.props.onActivate(this.props.match.params.emailCode);
    this.setState({
      isFetching: false,
    });
  }

  render() {
    const content = this.state.isFetching
      ? null
      : <Activate />;

    return (
      <SingleColumnLayout>
        {content}
      </SingleColumnLayout>
    );
  }
}

export function createActivateContainer(activateActions) {
  const mapDispatchToProps = dispatch => ({
    onActivate: (emailCode: string) => dispatch(activateActions.activate(emailCode)),
  });

  return withRouter<any>(connect(undefined, mapDispatchToProps)(ActivateContainer));
}

export default createActivateContainer(injectedActivateActions);
