import { selectToken } from '../../../modules/session/sessionSelectors';
import { UserProfile } from '../../../modules/api/jophiel/user';
import { toastActions } from '../../../modules/toast/toastActions';
import { DelProfile, PutProfile } from './profileReducer';

export const profileActions = {
  get: (userJid: string) => {
    return async (dispatch, getState, { userAPI }) => {
      const token = selectToken(getState());
      const profile = await userAPI.getUserProfile(token, userJid);

      dispatch(PutProfile.create({ userJid, value: profile }));
    };
  },

  update: (userJid: string, profile: UserProfile) => {
    return async (dispatch, getState, { userAPI }) => {
      const token = selectToken(getState());
      await userAPI.updateUserProfile(token, userJid, profile);

      dispatch(PutProfile.create({ userJid, value: profile }));

      toastActions.showSuccessToast('Profile updated.');
    };
  },

  clear: (userJid: string) => {
    return async dispatch => {
      dispatch(DelProfile.create({ userJid }));
    };
  },
};
