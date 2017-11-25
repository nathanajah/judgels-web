import { push } from 'react-router-redux';
import { setWith, TypedAction, TypedReducer } from 'redoodle';
import * as jophielAccountService from '../api/user/account';
import { Session } from '../api/user/account';

export const JUDGELS_SESSION_TOKEN_KEY = 'judgels:session_token';

export interface SessionState {
  username: string;
  isLoggedIn: boolean;
}

export const INITIAL_SESSION_STATE: SessionState = {
  username: 'guest',
  isLoggedIn: false,
};

export const LoginRequested = TypedAction.define('judgels:session:login:requested')<{
  username: string;
}>();

export const LoginAllowed = TypedAction.define('judgels:session:login:allowed')<{
  username: string;
}>();

export const LoginRejected = TypedAction.define('judgels:session:login:rejected')<{
  username: string;
}>();

export const LoginFailed = TypedAction.define('judgels:session:login:failed')<{
  username: string;
  error: Error;
}>();

export const logIn = (username: string, password: string) => async dispatch => {
  dispatch(LoginRequested.create({ username }));

  try {
    const session: Session|null = await jophielAccountService.logIn(username, password);
    if (session === null) {
      return dispatch(LoginRejected.create({ username }));
    }

    dispatch(LoginAllowed.create({ username }));
    localStorage.setItem(JUDGELS_SESSION_TOKEN_KEY, sessionToken.token);
    dispatch(push('/home'));
  } catch (error) {
    dispatch(LoginFailed.create({ username, error }));
  }
};

const createSessionReducer = () => {
  const builder = TypedReducer.builder<SessionState>();

  builder.withHandler(LoginAllowed.TYPE, (state, payload) => setWith(state, {
    username: payload.username,
  }));

  return builder.build();
};

export const sessionReducer = createSessionReducer();
