import { SubmissionError } from 'redux-form';

import { UserData } from '../../../../modules/api/jophiel/user';

export const registerActions = {
  register: (userData: UserData) => {
    return async (dispatch, getState, { userAPI }) => {
      const usernameExists = await userAPI.usernameExists(userData.username);
      const emailExists = await userAPI.emailExists(userData.email);

      if (usernameExists || emailExists) {
        const usernameError = usernameExists ? { username: 'Username already exists'} : {};
        const emailError = emailExists ? { email: 'Email already exists'} : {};
        throw new SubmissionError({
          ...usernameError,
          ...emailError,
        });
      }

      await userAPI.registerUser(userData);
    };
  },
};
