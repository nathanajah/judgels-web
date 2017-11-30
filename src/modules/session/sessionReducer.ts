import { setWith, TypedAction, TypedReducer } from 'redoodle';

import { User } from '../../models/user';

export interface SessionState {
  user?: User;
  token: string;
}

export const INITIAL_STATE: SessionState = {
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

export const LogOut = TypedAction.define('session/LOG_OUT')<{
  username: string;
}>();

const createSessionReducer = () => {
  const builder = TypedReducer.builder<SessionState>();

  builder.withHandler(LogInSuccess.TYPE, (state, payload) => setWith(state, {
    user: {
      username: payload.username,
    },
    token: payload.token,
  }));
  builder.withHandler(LogOut.TYPE, (state, payload) => INITIAL_STATE);
  builder.withDefaultHandler(state => state !== undefined ? state : INITIAL_STATE);

  return builder.build();
};

export const sessionReducer = createSessionReducer();
