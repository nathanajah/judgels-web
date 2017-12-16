import { EndSession, INITIAL_STATE, sessionReducer, SessionState, StartSession } from './sessionReducer';

describe('sessionReducer', () => {
  it('handles START_SESSION', () => {
    const state = INITIAL_STATE;
    const action = StartSession.create({
      user: { jid: 'jid123', username: 'user' },
      token: 'token123',
    });
    const nextState: SessionState = {
      isLoggedIn: true,
      user: { jid: 'jid123', username: 'user' },
      token: 'token123',
    };
    expect(sessionReducer(state, action)).toEqual(nextState);
  });

  it('handles END_SESSION', () => {
    const state: SessionState = {
      isLoggedIn: true,
      user: { jid: 'jid123', username: 'user' },
      token: 'token123',
    };
    const action = EndSession.create();
    expect(sessionReducer(state, action)).toEqual(INITIAL_STATE);
  });
});
