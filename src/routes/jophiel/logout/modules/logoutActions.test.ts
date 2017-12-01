import { logoutActions } from './logoutActions';
import { EndSession } from '../../../../modules/session/sessionReducer';

describe('logoutActions', () => {
  let dispatch: jest.Mock<any>;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  describe('logOut()', () => {
    const { logOut } = logoutActions;
    const doLogOut = async () => logOut()(dispatch);

    it('ends the session', async () => {
      await doLogOut();

      expect(dispatch).toHaveBeenCalledWith(EndSession.create());
    });
  });
});
