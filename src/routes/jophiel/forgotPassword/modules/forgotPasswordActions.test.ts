import { forgotPasswordActions } from './forgotPasswordActions';

describe('forgotPasswordActions', () => {
  let dispatch: jest.Mock<any>;
  let getState: jest.Mock<any>;

  let userAPI: jest.Mocked<any>;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();

    userAPI = {
      requestToResetUserPassword: jest.fn(),
    };
  });

  describe('requestToReset()', () => {
    const { requestToReset } = forgotPasswordActions;
    const doRequestToReset = async () => requestToReset('email@domain.com')(dispatch, getState, { userAPI });

    it('calls API to request to reset password', async () => {
      await doRequestToReset();

      expect(userAPI.requestToResetUserPassword).toHaveBeenCalledWith('email@domain.com');
    });
  });
});
