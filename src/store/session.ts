import { push } from 'react-router-redux';
import { setWith, TypedAction, TypedReducer } from 'redoodle';

import { AccountAPI } from '../api/jophiel/account';

export interface SessionState {
  username: string;
  token: string;
}

export const INITIAL_STATE: SessionState = {
  username: 'guest',
  token: '',
};

export const LogInRequest = TypedAction.define('session/LOG_IN_REQUEST')<{
  username: string;
}>();

export const LogInSuccess = TypedAction.define('session/LOG_IN_SUCCESS')<{
  username: string;
  token: string;
}>();

export const LogInFailure = TypedAction.define('session/LOG_IN_FAILURE')<{
  error?: Error;
}>();

export function logIn(username: string, password: string) {
  return async (dispatch, getState, { accountAPI }: { accountAPI: AccountAPI }) => {
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

const createSessionReducer = () => {
  const builder = TypedReducer.builder<SessionState>();

  builder.withHandler(LogInSuccess.TYPE, (state, payload) => setWith(state, {
    username: payload.username,
    token: payload.token,
  }));
  builder.withDefaultHandler(state => state !== undefined ? state : INITIAL_STATE);

  return builder.build();
};

export const sessionReducer = createSessionReducer();
