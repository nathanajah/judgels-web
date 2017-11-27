import { LogInFailure, LogInRequest, LogInSuccess } from '../store/session';
import { Session } from '../api/jophiel/models';
import { push } from 'react-router-redux';
import { ForbiddenError } from '../api/errors';
import { sessionActions } from './session';

describe('sessionActions', () => {
  let dispatch: jest.Mock<any>;
  let getState: jest.Mock<any>;

  let accountAPI: jest.Mocked<any>;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();

    accountAPI = {
      logIn: jest.fn(),
    };
  });

  describe('logIn()', () => {
    const { logIn } = sessionActions;

    it('requests', async () => {
      await logIn('user', 'pass')(dispatch, getState, { accountAPI });

      expect(accountAPI.logIn).toHaveBeenCalledWith('user', 'pass');
      expect(dispatch).toHaveBeenCalledWith(LogInRequest.create({ username: 'user' }));
    });

    it('succeeds when the credentials is valid', async () => {
      accountAPI.logIn.mockImplementation(() => Promise.resolve<Session>({ token: 'token123' }));

      await logIn('user', 'pass')(dispatch, getState, { accountAPI });

      expect(dispatch).toHaveBeenCalledWith(LogInSuccess.create({ username: 'user', token: 'token123' }));
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
