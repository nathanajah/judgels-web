import { EndSession, INITIAL_STATE, sessionReducer, SessionState, StartSession } from './sessionReducer';

describe('sessionReducer', () => {
  it('handles START_SESSION', () => {
    const state = INITIAL_STATE;
    const action = StartSession.create({
      user: { username: 'user' },
      token: 'token123',
    });
    const nextState: SessionState = {
      user: { username: 'user' },
      token: 'token123',
    };
    expect(sessionReducer(state, action)).toEqual(nextState);
  });

  it('handles END_SESSION', () => {
    const state: SessionState = {
      user: { username: 'user' },
      token: 'token123',
    };
    const action = EndSession.create();
    expect(sessionReducer(state, action)).toEqual(INITIAL_STATE);
  });
});
