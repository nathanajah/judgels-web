import { UserData } from '../../../../modules/api/jophiel/user';

export const registerActions = {
  register: (userData: UserData) => {
    return async (dispatch, getState, { userAPI }) => {
      await userAPI.registerUser(userData);
    };
  },
};
