import { push } from 'react-router-redux';

import { UnauthorizedError } from '../../../../modules/api/error';
import { EndSession } from '../../../../modules/session/sessionReducer';
import { selectToken } from '../../../../modules/session/sessionSelectors';

export const logoutActions = {
  logOut: () => {
    return async (dispatch, getState, { sessionAPI, toastActions }) => {
      try {
        await sessionAPI.logOut(selectToken(getState));
      } catch (error) {
        if (!(error instanceof UnauthorizedError)) {
          throw error;
        }
      }
      toastActions.showToast('You have been logged out.');
      dispatch(EndSession.create());
      dispatch(push('/'));
    };
  },
};
