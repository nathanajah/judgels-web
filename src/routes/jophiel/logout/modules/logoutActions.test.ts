import { push } from 'react-router-redux';

import { logoutActions } from './logoutActions';
import { LogOutSuccess } from './logoutReducer';
import { EndSession } from '../../../../modules/session/sessionReducer';

describe('logoutActions', () => {
  let dispatch: jest.Mock<any>;
  const getState = () => ({ session: { token: 'token123' } });

  let sessionAPI: jest.Mocked<any>;

  beforeEach(() => {
    dispatch = jest.fn();

    sessionAPI = {
      logOut: jest.fn(),
    };
  });

  describe('logOut()', () => {
    const { logOut } = logoutActions;
    const doLogOut = async () => logOut()(dispatch, getState, { sessionAPI });

    it('tries to log out', async () => {
      await doLogOut();

      expect(sessionAPI.logOut).toHaveBeenCalledWith('token123');
    });

    describe('when the logout is successful', () => {
      beforeEach(async () => {
        await doLogOut();
      });

      it('succeeds', () => {
        expect(dispatch).toHaveBeenCalledWith(
          LogOutSuccess.create({ toast: { message: 'You have been logged out.' } }));
        expect(dispatch).toHaveBeenCalledWith(push('/'));
      });

      it('ends the session', () => {
        expect(dispatch).toHaveBeenCalledWith(EndSession.create());
      });
    });
  });
});
