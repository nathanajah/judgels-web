import { push } from 'react-router-redux';

import { LogInFailure, LogInRequest, LogInSuccess } from '../store/session';

export const sessionActions = {
  logIn: (username: string, password: string) => {
    return async (dispatch, getState, { accountAPI }) => {
      dispatch(LogInRequest.create({ username }));

      try {
        const session = await accountAPI.logIn(username, password);
        const { token } = session;
        dispatch(LogInSuccess.create({ username, token }));
        dispatch(push('/home'));
      } catch (error) {
        dispatch(LogInFailure.create({ error }));
      }
    };
  }
};
