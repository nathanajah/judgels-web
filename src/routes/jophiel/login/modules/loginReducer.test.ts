import { INITIAL_STATE, LogInFailure, loginReducer, LogInRequest, LoginState, LogInSuccess } from './loginReducer';

describe('loginReducer', () => {
  it('handles LOG_IN_REQUEST', () => {
    const state = INITIAL_STATE;
    const action = LogInRequest.create();
    const nextState: LoginState = { isLoading: true };
    expect(loginReducer(state, action)).toEqual(nextState);
  });

  it('handles LOG_IN_SUCCESS', () => {
    const state: LoginState = { isLoading: true };
    const action = LogInSuccess.create();
    const nextState: LoginState = { isLoading: false };
    expect(loginReducer(state, action)).toEqual(nextState);
  });

  it('handles LOG_IN_FAILURE', () => {
    const state: LoginState = { isLoading: true };
    const action = LogInFailure.create();
    const nextState: LoginState = { isLoading: false };
    expect(loginReducer(state, action)).toEqual(nextState);
  });
});
