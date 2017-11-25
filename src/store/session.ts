import { push } from 'react-router-redux';
import { setWith, TypedAction, TypedReducer } from 'redoodle';
import * as jophielAccountService from '../api/user/account';
import { Session } from '../api/user/account';

export interface SessionState {
  username: string;
  isLoggedIn: boolean;
}

const INITIAL_STATE: SessionState = {
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
  builder.withDefaultHandler(state => state !== undefined ? state : INITIAL_STATE);

  return builder.build();
};

export const sessionReducer = createSessionReducer();
