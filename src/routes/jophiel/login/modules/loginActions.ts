import { push } from 'react-router-redux';

import { LogInFailure, LogInSuccess } from './loginReducer';
import { ForbiddenError } from '../../../../modules/api/error';
import { StartSession } from '../../../../modules/session/sessionReducer';

export const loginActions = {
  logIn: (username: string, password: string) => {
    return async (dispatch, getState, { sessionAPI }) => {
      try {
        const session = await sessionAPI.logIn(username, password);
        const { token } = session;

        dispatch(LogInSuccess.create({ toast: { message: `Welcome, ${username}.` } }));

        dispatch(StartSession.create({
          user: { username },
          token,
        }));

        dispatch(push('/home'));
      } catch (error) {
        if (error instanceof ForbiddenError) {
          dispatch(LogInFailure.create({ toast: { error: new Error('Invalid username/password.') } }));
        } else {
          dispatch(LogInFailure.create({ toast: { error } }));
        }
      }
    };
  },
};
