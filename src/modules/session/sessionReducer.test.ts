import { DelSession, INITIAL_STATE, sessionReducer, SessionState, PutSession } from './sessionReducer';

describe('sessionReducer', () => {
  test('PUT', () => {
    const state = INITIAL_STATE;
    const action = PutSession.create({
      user: { jid: 'jid123', username: 'user' },
      session: { token: 'token123' },
    });
    const nextState: SessionState = {
      isLoggedIn: true,
      value: {
        user: { jid: 'jid123', username: 'user' },
        session: { token: 'token123' },
      },
    };
    expect(sessionReducer(state, action)).toEqual(nextState);
  });

  test('DEL', () => {
    const state: SessionState = {
      isLoggedIn: true,
      value: {
        user: { jid: 'jid123', username: 'user' },
        session: { token: 'token123' },
      },
    };
    const action = DelSession.create();
    expect(sessionReducer(state, action)).toEqual(INITIAL_STATE);
  });

  test('other actions', () => {
    const state: SessionState = {
      isLoggedIn: true,
      value: {
        user: { jid: 'jid123', username: 'user' },
        session: { token: 'token123' },
      },
    };
    expect(sessionReducer(state, { type: 'other' })).toEqual(state);
  });

  test('initial state', () => {
    expect(sessionReducer(undefined as any, { type: 'other' })).toEqual(INITIAL_STATE);
  });
});
