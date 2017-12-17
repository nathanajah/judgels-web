import { push } from 'react-router-redux';

import { loginActions } from './loginActions';
import { ForbiddenError } from '../../../../modules/api/error';
import { Session } from '../../../../modules/api/jophiel/session';
import { StartSession } from '../../../../modules/session/sessionReducer';

describe('loginActions', () => {
  let dispatch: jest.Mock<any>;
  let getState: jest.Mock<any>;

  let sessionAPI: jest.Mocked<any>;
  let userAPI: jest.Mocked<any>;
  let toastActions: jest.Mocked<any>;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();

    sessionAPI = {
      logIn: jest.fn(),
    };
    userAPI = {
      getMyself: jest.fn(),
    };
    toastActions = {
      showToast: jest.fn(),
      showErrorToast: jest.fn(),
    };
  });

  describe('logIn()', () => {
    const { logIn } = loginActions;
    const doLogIn = async () => logIn('user', 'pass')(dispatch, getState, { sessionAPI, userAPI, toastActions });

    it('tries to logs in', async () => {
      sessionAPI.logIn.mockImplementation(() => Promise.resolve<Session>({ token: 'token123' }));
      userAPI.getMyself.mockImplementation(() => Promise.resolve<any>({ jid: 'jid123' }));

      await doLogIn();

      expect(sessionAPI.logIn).toHaveBeenCalledWith('user', 'pass');
    });

    describe('when the credentials is valid', () => {
      beforeEach(async () => {
        sessionAPI.logIn.mockImplementation(() => Promise.resolve<Session>({ token: 'token123' }));
        userAPI.getMyself.mockImplementation(() => Promise.resolve<any>({ jid: 'jid123' }));

        await doLogIn();
      });

      it('succeeds with toast', () => {
        expect(toastActions.showToast).toHaveBeenCalledWith('Welcome, user.');
      });

      it('redirects to home', () => {
        expect(dispatch).toHaveBeenCalledWith(push('/home'));
      });

      it('starts the session', () => {
        expect(dispatch).toHaveBeenCalledWith(StartSession.create({
          user: {
            jid: 'jid123',
            username: 'user'
          },
          token: 'token123',
        }));
      });
    });

    describe('when the credentials is invalid', () => {
      let error: any;

      beforeEach(async () => {
        error = new ForbiddenError();
        sessionAPI.logIn.mockImplementation(() => { throw error; });
      });

      it('throws a more descriptive error', async () => {
        setTimeout(() => {
          expect(async () => {
            await doLogIn();
          }).toThrow('Invalid username/password.');
        });
      });
    });
  });
});
