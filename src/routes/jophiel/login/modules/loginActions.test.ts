import { push } from 'react-router-redux';

import { loginActions } from './loginActions';
import { LogInFailure, LogInSuccess } from './loginReducer';
import { ForbiddenError } from '../../../../modules/api/error';
import { Session } from '../../../../modules/api/jophiel/session';
import { StartSession } from '../../../../modules/session/sessionReducer';

describe('loginActions', () => {
  let dispatch: jest.Mock<any>;
  let getState: jest.Mock<any>;

  let sessionAPI: jest.Mocked<any>;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();

    sessionAPI = {
      logIn: jest.fn(),
    };
  });

  describe('logIn()', () => {
    const { logIn } = loginActions;
    const doLogIn = async () => logIn('user', 'pass')(dispatch, getState, { sessionAPI });

    it('tries to logs in', async () => {
      await doLogIn();

      expect(sessionAPI.logIn).toHaveBeenCalledWith('user', 'pass');
    });

    describe('when the credentials is valid', () => {
      beforeEach(async () => {
        sessionAPI.logIn.mockImplementation(() => Promise.resolve<Session>({ token: 'token123' }));

        await doLogIn();
      });

      it('succeeds', () => {
        expect(dispatch).toHaveBeenCalledWith(LogInSuccess.create( { toast: { message: 'Welcome, user.' }} ));
        expect(dispatch).toHaveBeenCalledWith(push('/home'));
      });

      it('starts the session', () => {
        expect(dispatch).toHaveBeenCalledWith(StartSession.create({
          user: { username: 'user' },
          token: 'token123',
        }));
      });
    });

    describe('when the credentials is invalid', () => {
      let error: any;

      beforeEach(async () => {
        error = new ForbiddenError();
        sessionAPI.logIn.mockImplementation(() => { throw error; });

        await doLogIn();
      });

      it('fails with error toast', () => {
        expect(dispatch).toHaveBeenCalledWith(
          LogInFailure.create({ toast: { error: new Error('Invalid username/password.') } }));
      });
    });
  });
});
