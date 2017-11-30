import { push } from 'react-router-redux';

import { Session } from '../../api/jophiel/models';
import { ForbiddenError } from '../../models/error';
import { sessionActions } from './sessionActions';
import { LogInFailure, LogInRequest, LogInSuccess, LogOut } from './sessionReducer';

describe('sessionActions', () => {
  let dispatch: jest.Mock<any>;
  let getState: jest.Mock<any>;

  let toastActions: jest.Mocked<any>;
  let accountAPI: jest.Mocked<any>;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();

    toastActions = {
      showErrorToast: jest.fn().mockImplementation(message => ({ type: 'mock', payload: message })),
    };
    accountAPI = {
      logIn: jest.fn(),
    };
  });

  describe('logIn()', () => {
    const { logIn } = sessionActions;
    const doLogIn = async () => logIn('user', 'pass')(dispatch, getState, { toastActions, accountAPI });

    it('requests', async () => {
      await doLogIn();

      expect(accountAPI.logIn).toHaveBeenCalledWith('user', 'pass');
      expect(dispatch).toHaveBeenCalledWith(LogInRequest.create({ username: 'user' }));
    });

    it('succeeds when the credentials is valid', async () => {
      accountAPI.logIn.mockImplementation(() => Promise.resolve<Session>({ token: 'token123' }));

      await doLogIn();

      expect(dispatch).toHaveBeenCalledWith(LogInSuccess.create({ username: 'user', token: 'token123' }));
      expect(dispatch).toHaveBeenCalledWith(push('/home'));
    });

    it('fails when the credentials is invalid', async () => {
      const error = new ForbiddenError();
      accountAPI.logIn.mockImplementation(() => { throw error; });

      await doLogIn();

      expect(dispatch).toHaveBeenCalledWith(LogInFailure.create({ error }));
      expect(dispatch).toHaveBeenCalledWith(toastActions.showErrorToast('Invalid username/password.'));
    });
  });

  describe('logOut()', () => {
    const { logOut } = sessionActions;
    const doLogOut = async () => logOut('user')(dispatch);

    it('requests', async () => {
      await doLogOut();

      expect(dispatch).toHaveBeenCalledWith(LogOut.create({ username: 'user' }));
    });
  });
});
