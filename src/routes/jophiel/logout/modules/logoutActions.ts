import { push } from 'react-router-redux';

import { LogOutFailure } from './logoutReducer';
import { EndSession } from '../../../../modules/session/sessionReducer';
import { selectToken } from '../../../../modules/session/sessionSelectors';

export const logoutActions = {
  logOut: () => {
    return async (dispatch, getState, { sessionAPI }) => {
      try {
        await sessionAPI.logOut(selectToken(getState));
        dispatch(EndSession.create());
        dispatch(push('/'));
      } catch (error) {
        dispatch(LogOutFailure.create({ error }));
      }
    };
  },
};
