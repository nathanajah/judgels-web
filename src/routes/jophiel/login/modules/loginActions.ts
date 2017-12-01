import { push } from 'react-router-redux';

import { ForbiddenError } from '../../../../models/error';
import { LogInFailure, LogInRequest, LogInSuccess } from './loginReducer';
import { StartSession } from '../../../../modules/session/sessionReducer';

export const loginActions = {
  logIn: (username: string, password: string) => {
    return async (dispatch, getState, { sessionAPI }) => {
      dispatch(LogInRequest.create());

      try {
        const session = await sessionAPI.logIn(username, password);
        const { token } = session;

        dispatch(LogInSuccess.create());

        dispatch(StartSession.create({
          user: { username },
          token,
        }));

        dispatch(push('/home'));
      } catch (error) {
        if (error instanceof ForbiddenError) {
          dispatch(LogInFailure.create({ error: new Error('Invalid username/password.') }));
        } else {
          dispatch(LogInFailure.create({ error }));
        }
      }
    };
  },
};
