import { EndSession } from '../../../../modules/session/sessionReducer';
import { LogOutFailure } from './logoutReducer';

export const logoutActions = {
  logOut: () => {
    return async (dispatch, getState, { sessionAPI }) => {
      try {
        await sessionAPI.logOut();
        dispatch(EndSession.create());
      } catch (error) {
        dispatch(LogOutFailure.create({ error }));
      }
    };
  },
};
