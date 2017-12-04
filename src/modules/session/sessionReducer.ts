import { setWith, TypedAction, TypedReducer } from 'redoodle';

import { User } from '../api/jophiel/user';

export interface SessionState {
  isLoggedIn?: boolean;
  user?: User;
  token?: string;
}

// Somehow redux-persist won't work after dispatching EndSession if the next state is an empty object...
export const INITIAL_STATE: SessionState = { isLoggedIn: false };

export const StartSession = TypedAction.define('session/START_SESSION')<{
  user: User;
  token: string;
}>();

export const EndSession = TypedAction.defineWithoutPayload('session/END_SESSION')();

const createSessionReducer = () => {
  const builder = TypedReducer.builder<SessionState>();

  builder.withHandler(StartSession.TYPE, (state, payload) => setWith(state, {
    isLoggedIn: true,
    ...payload,
  }));
  builder.withHandler(EndSession.TYPE, (state, payload) => INITIAL_STATE);
  builder.withDefaultHandler(state => state !== undefined ? state : INITIAL_STATE);

  return builder.build();
};

export const sessionReducer = createSessionReducer();
