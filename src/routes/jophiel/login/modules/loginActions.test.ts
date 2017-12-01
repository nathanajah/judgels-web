import { push } from 'react-router-redux';

import { loginActions } from './loginActions';
import { LogInFailure, LogInRequest, LogInSuccess } from './loginReducer';
import { Session } from '../../../../api/jophiel/models';
import { ForbiddenError } from '../../../../models/error';
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

    it('requests', async () => {
      await doLogIn();

      expect(dispatch).toHaveBeenCalledWith(LogInRequest.create());
    });

    it('tries to logs in', async () => {
      await doLogIn();

      expect(sessionAPI.logIn).toHaveBeenCalledWith('user', 'pass');
    });

    describe('when the credentials is valid', () => {
      beforeEach(() => {
        sessionAPI.logIn.mockImplementation(() => Promise.resolve<Session>({ token: 'token123' }));
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

    describe('when the credentials is invalid', () => {
      let error: any;

      beforeEach(() => {
        error = new ForbiddenError();
        sessionAPI.logIn.mockImplementation(() => { throw error; });
      });

      it('fails with error toast', async () => {
        await doLogIn();

        expect(dispatch).toHaveBeenCalledWith(LogInFailure.create({
          toast: {
            error: new Error('Invalid username/password.')
          },
        }));
      });
    });
  });
});
