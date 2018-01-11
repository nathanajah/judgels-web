import { push } from 'react-router-redux';

import { ForbiddenError } from '../../../../modules/api/error';
import { PutSession } from '../../../../modules/session/sessionReducer';

export const loginActions = {
  logIn: (username: string, password: string) => {
    return async (dispatch, getState, { sessionAPI, userAPI, toastActions }) => {
      let session;
      try {
        session = await sessionAPI.logIn(username, password);
      } catch (error) {
        if (error instanceof ForbiddenError) {
          throw new Error('Invalid username/password.');
        } else {
          throw error;
        }
      }

      const user = await userAPI.getMyself(session.token);
      toastActions.showToast(`Welcome, ${username}.`);
      dispatch(PutSession.create({ user, session }));
      dispatch(push('/'));
    };
  },
};
