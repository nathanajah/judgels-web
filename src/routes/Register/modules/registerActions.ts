import { RegisterRequest } from './registerReducer';

export const registerActions = {
  register: (username: string, name: string, email: string, password: string) => {
    return async (dispatch, getState, { toastActions, accountAPI }) => {
      dispatch(RegisterRequest.create());
    };
  },
};
