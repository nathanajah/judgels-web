import { push } from 'react-router-redux';

import { LogOutFailure, LogOutSuccess } from './logoutReducer';
import { UnauthorizedError } from '../../../../modules/api/error';
import { EndSession } from '../../../../modules/session/sessionReducer';
import { selectToken } from '../../../../modules/session/sessionSelectors';

export const logoutActions = {
  logOut: () => {
    return async (dispatch, getState, { sessionAPI }) => {
      try {
        try {
          await sessionAPI.logOut(selectToken(getState));
        } catch (error) {
          if (!(error instanceof UnauthorizedError)) {
            return dispatch(LogOutFailure.create({ toast: { error } }));
          }
        }
        dispatch(LogOutSuccess.create({ toast: { message: 'You have been logged out.' } }));
        dispatch(EndSession.create());
        dispatch(push('/'));
      } catch (error) {
        dispatch(LogOutFailure.create({ toast: { error } }));
      }
    };
  },
};
