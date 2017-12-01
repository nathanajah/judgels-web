import { TypedAction, TypedReducer } from 'redoodle';

import { User } from '../../models/user';

export interface SessionState {
  user?: User;
  token?: string;
}

export const INITIAL_STATE: SessionState = {};

export const StartSession = TypedAction.define('session/START_SESSION')<{
  user: User;
  token: string;
}>();

export const EndSession = TypedAction.defineWithoutPayload('session/END_SESSION')();

const createSessionReducer = () => {
  const builder = TypedReducer.builder<SessionState>();

  builder.withHandler(StartSession.TYPE, (state, payload) => payload);
  builder.withHandler(EndSession.TYPE, (state, payload) => INITIAL_STATE);
  builder.withDefaultHandler(state => state !== undefined ? state : INITIAL_STATE);

  return builder.build();
};

export const sessionReducer = createSessionReducer();
