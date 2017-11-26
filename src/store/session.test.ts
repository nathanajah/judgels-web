import Mock = jest.Mock;
import Mocked = jest.Mocked;

import { push } from 'react-router-redux';

import {
  INITIAL_STATE, logIn, LogInFailure, LogInRequest, LogInSuccess, sessionReducer,
  SessionState,
} from './session';

import { ForbiddenError } from '../api/errors';
import { AccountAPI } from '../api/jophiel/account';
import { Session } from '../api/jophiel/models';

describe('sessionReducer', () => {
  it('handles LOG_IN_REQUEST', () => {
    const state = INITIAL_STATE;
    const action = LogInRequest.create({ username: 'user' });
    expect(sessionReducer(state, action)).toEqual(state);
  });

  it('handles LOG_IN_SUCCESS', () => {
    const state = INITIAL_STATE;
    const action = LogInSuccess.create({ username: 'user', token: 'token123' });
    const nextState: SessionState = { username: 'user', token: 'token123'};
    expect(sessionReducer(state, action)).toEqual(nextState);
  });

  it('handles LOG_IN_FAILURE', () => {
    const state = INITIAL_STATE;
    const action = LogInFailure.create({ error: new Error() });
    expect(sessionReducer(state, action)).toEqual(state);
  });
});

describe('session thunks', () => {
  let dispatch: Mock<any>;
  let getState: Mock<any>;

  let accountAPI: Mocked<AccountAPI>;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();

    accountAPI = {
      logIn: jest.fn(),
    };
  });

  describe('logIn()', () => {
    it('requests', async () => {
      await logIn('user', 'pass')(dispatch, getState, { accountAPI });

      expect(accountAPI.logIn).toHaveBeenCalledWith('user', 'pass');
      expect(dispatch).toHaveBeenCalledWith(LogInRequest.create({ username: 'user' }));
    });

    it('succeeds when the credentials is valid', async () => {
      accountAPI.logIn.mockImplementation(() => Promise.resolve<Session>({ token: 'token123' }));

      await logIn('user', 'pass')(dispatch, getState, { accountAPI });

      expect(dispatch).toHaveBeenCalledWith(LogInSuccess.create({ username: 'user', token: 'token123'}));
      expect(dispatch).toHaveBeenCalledWith(push('/home'));
    });

    it('fails when the credentials is invalid', async () => {
      const error = new ForbiddenError();
      accountAPI.logIn.mockImplementation(() => { throw error; });

      await logIn('user', 'pass')(dispatch, getState, { accountAPI });

      expect(dispatch).toHaveBeenCalledWith(LogInFailure.create({ error }));
    });
  });
});
