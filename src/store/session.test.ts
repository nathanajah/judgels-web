import { INITIAL_STATE, LogInFailure, LogInRequest, LogInSuccess, sessionReducer, SessionState, } from './session';

describe('sessionReducer', () => {
  it('handles LOG_IN_REQUEST', () => {
    const state = INITIAL_STATE;
    const action = LogInRequest.create({ username: 'user' });
    expect(sessionReducer(state, action)).toEqual(state);
  });

  it('handles LOG_IN_SUCCESS', () => {
    const state = INITIAL_STATE;
    const action = LogInSuccess.create({ username: 'user', token: 'token123' });
    const nextState: SessionState = { user: { username: 'user' }, token: 'token123'};
    expect(sessionReducer(state, action)).toEqual(nextState);
  });

  it('handles LOG_IN_FAILURE', () => {
    const state = INITIAL_STATE;
    const action = LogInFailure.create({ error: new Error() });
    expect(sessionReducer(state, action)).toEqual(state);
  });
});
