import { TypedAction, TypedReducer } from 'redoodle';

import { User } from '../api/jophiel/user';
import { Session } from '../api/jophiel/session';

export interface UserSession {
  user: User;
  session: Session;
}

export interface SessionState {
  isLoggedIn: boolean;
  value?: UserSession;
}

// Somehow redux-persist won't work after dispatching DelSession if the next state is an empty object...
export const INITIAL_STATE: SessionState = { isLoggedIn: false };

export const PutSession = TypedAction.define('session/PUT')<UserSession>();

export const DelSession = TypedAction.defineWithoutPayload('session/DEL')();

const createSessionReducer = () => {
  const builder = TypedReducer.builder<SessionState>();

  builder.withHandler(PutSession.TYPE, (state, payload) => ({
    isLoggedIn: true,
    value: payload,
  }));
  builder.withHandler(DelSession.TYPE, (state, payload) => INITIAL_STATE);
  builder.withDefaultHandler(state => (state !== undefined ? state : INITIAL_STATE));

  return builder.build();
};

export const sessionReducer = createSessionReducer();
