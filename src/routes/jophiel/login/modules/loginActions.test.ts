import { push } from 'react-router-redux';

import { loginActions } from './loginActions';
import { LogInFailure, LogInRequest, LogInSuccess } from './loginReducer';
import { Session } from '../../../../api/jophiel/models';
import { ForbiddenError } from '../../../../models/error';
import { StartSession } from '../../../../modules/session/sessionReducer';

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
    const { logIn } = loginActions;
    const doLogIn = async () => logIn('user', 'pass')(dispatch, getState, { toastActions, accountAPI });

    it('requests', async () => {
      await doLogIn();

      expect(dispatch).toHaveBeenCalledWith(LogInRequest.create());
    });

    it('tries to logs in', async () => {
      await doLogIn();

      expect(accountAPI.logIn).toHaveBeenCalledWith('user', 'pass');
    });

    describe('when the credentials is valid', () => {
      beforeEach(() => {
        accountAPI.logIn.mockImplementation(() => Promise.resolve<Session>({ token: 'token123' }));
      });

      it('succeeds', async () => {
        await doLogIn();

        expect(dispatch).toHaveBeenCalledWith(LogInSuccess.create());
        expect(dispatch).toHaveBeenCalledWith(push('/home'));
      });

      it('starts the session', async () => {
        await doLogIn();

        expect(dispatch).toHaveBeenCalledWith(StartSession.create({
          user: { username: 'user' },
          token: 'token123',
        }));
        expect(dispatch).toHaveBeenCalledWith(push('/home'));
      });
    });

    describe('when the credentials is valid', () => {
      beforeEach(() => {
        const error = new ForbiddenError();
        accountAPI.logIn.mockImplementation(() => { throw error; });
      });

      it('fails with toast', async () => {
        await doLogIn();

        expect(dispatch).toHaveBeenCalledWith(LogInFailure.create());
        expect(dispatch).toHaveBeenCalledWith(toastActions.showErrorToast('Invalid username/password.'));
      });
    });
  });
});
