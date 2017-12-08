import { registerActions } from './registerActions';
import { UserData } from '../../../../modules/api/jophiel/user';

describe('registerActions', () => {
  let dispatch: jest.Mock<any>;
  let getState: jest.Mock<any>;

  let userAPI: jest.Mocked<any>;
  let toastActions: jest.Mocked<any>;
  let successCallback: jest.Mock<any>;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();

    userAPI = {
      registerUser: jest.fn(),
    };
    toastActions = {
      showErrorToast: jest.fn(),
    };
    successCallback = jest.fn();
  });

  describe('register()', () => {
    const { register } = registerActions;
    const userData: UserData = {
      username: 'user',
      name: 'name',
      email: 'email@domain.com',
      password: 'pass',
    };
    const doRegister = async () => register(userData, successCallback)(dispatch, getState, { userAPI, toastActions });

    beforeEach(async () => {
      await doRegister();
    });

    it('tries to register user', async () => {
      expect(userAPI.registerUser).toHaveBeenCalledWith(userData);
    });

    it('calls the success callback', async () => {
      expect(successCallback).toHaveBeenCalled();
    });
  });
});
