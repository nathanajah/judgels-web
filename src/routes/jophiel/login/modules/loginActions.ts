import { push } from 'react-router-redux';

import { ForbiddenError } from '../../../../models/error';
import { LogInFailure, LogInRequest, LogInSuccess } from './loginReducer';
import { StartSession } from '../../../../modules/session/sessionReducer';

export const loginActions = {
  logIn: (username: string, password: string) => {
    return async (dispatch, getState, { toastActions, accountAPI }) => {
      dispatch(LogInRequest.create());

      try {
        const session = await accountAPI.logIn(username, password);
        const { token } = session;

        dispatch(LogInSuccess.create());

        dispatch(StartSession.create({
          user: { username },
          token,
        }));

        dispatch(push('/home'));
      } catch (error) {
        dispatch(LogInFailure.create());

        if (error instanceof ForbiddenError) {
          dispatch(toastActions.showErrorToast('Invalid username/password.'));
        } else {
          dispatch(toastActions.showErrorToast());
        }
      }
    };
  },
};
