import { setWith, TypedAction, TypedReducer } from 'redoodle';

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
