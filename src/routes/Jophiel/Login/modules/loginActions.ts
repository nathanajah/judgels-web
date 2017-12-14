import { push } from 'react-router-redux';

import { ForbiddenError } from '../../../../modules/api/error';
import { StartSession } from '../../../../modules/session/sessionReducer';

export const loginActions = {
  logIn: (username: string, password: string) => {
    return async (dispatch, getState, { sessionAPI, toastActions }) => {
      try {
        const session = await sessionAPI.logIn(username, password);
        const { token } = session;

        toastActions.showToast(`Welcome, ${username}.`);

        dispatch(StartSession.create({
          user: { username },
          token,
        }));

        dispatch(push('/home'));
      } catch (error) {
        if (error instanceof ForbiddenError) {
          throw new Error('Invalid username/password.');
        } else {
          throw error;
        }
      }
    };
  },
};
