import { push } from 'react-router-redux';

import { LogInFailure, LogInRequest, LogInSuccess } from './loginReducer';
import { ForbiddenError } from '../../../../modules/api/error';
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
          dispatch(LogInFailure.create({
            toast: {
              error: new Error('Invalid username/password.')
            },
          }));
        } else {
          dispatch(LogInFailure.create({
            toast: {
              error
            },
          }));
        }
      }
    };
  },
};
