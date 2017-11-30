import { push } from 'react-router-redux';

import { ForbiddenError } from '../api/errors';
import { LogInFailure, LogInRequest, LogInSuccess, LogOut } from '../store/session';

export const sessionActions = {
  logIn: (username: string, password: string) => {
    return async (dispatch, getState, { toastActions, accountAPI }) => {
      dispatch(LogInRequest.create({ username }));

      try {
        const session = await accountAPI.logIn(username, password);
        const { token } = session;
        dispatch(LogInSuccess.create({ username, token }));
        dispatch(push('/home'));
      } catch (error) {
        dispatch(LogInFailure.create({ error }));

        if (error instanceof ForbiddenError) {
          dispatch(toastActions.showErrorToast('Invalid username/password.'));
        } else {
          dispatch(toastActions.showErrorToast());
        }
      }
    };
  },

  logOut: (username: string) => {
    return async (dispatch) => dispatch(LogOut.create({ username }));
  }
};
