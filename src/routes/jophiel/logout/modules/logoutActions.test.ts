import { logoutActions } from './logoutActions';
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

    it('ends the session', async () => {
      await doLogOut();

      expect(dispatch).toHaveBeenCalledWith(EndSession.create());
    });
  });
});
