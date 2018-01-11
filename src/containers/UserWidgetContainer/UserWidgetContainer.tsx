import { connect } from 'react-redux';

import { UserWidget } from '../../components/UserWidget/UserWidget';
import { AppState } from '../../modules/store';

export function createUserWidgetContainer() {
  const mapStateToProps = (state: AppState) => ({
    user: state.session.value && state.session.value.user,
  });

  return connect(mapStateToProps)(UserWidget);
}

export default createUserWidgetContainer();
