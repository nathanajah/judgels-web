import { RegisterFailure } from './registerReducer';
import { UserData } from '../../../../modules/api/jophiel/user';

export const registerActions = {
  register: (userData: UserData, successCallback: () => void) => {
    return async (dispatch, getState, { userAPI }) => {
      try {
        await userAPI.registerUser(userData);
        successCallback();
      } catch (error) {
        dispatch(RegisterFailure.create({ toast: { error } }));
      }
    };
  },
};
