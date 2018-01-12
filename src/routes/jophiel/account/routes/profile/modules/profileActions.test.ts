import { profileActions } from './profileActions';
import { UserProfile } from '../../../../../../modules/api/jophiel/user';
import { AppState } from '../../../../../../modules/store';
import { sessionState } from '../../../../../../fixtures/state';
import { PutProfile } from '../../../../../../modules/session/sessionReducer';

describe('profileActions', () => {
  let dispatch: jest.Mock<any>;

  const userJid = 'jid123';
  const token = 'token123';
  const getState = (): Partial<AppState> => ({ session: sessionState });

  let userAPI: jest.Mocked<any>;
  let toastActions: jest.Mocked<any>;

  beforeEach(() => {
    dispatch = jest.fn();

    userAPI = {
      getUserProfile: jest.fn(),
      updateUserProfile: jest.fn(),
    };
    toastActions = {
      showSuccessToast: jest.fn(),
    };
  });

  describe('get()', () => {
    const { get } = profileActions;
    const doGet = async () => get()(dispatch, getState, { userAPI });

    const profile: UserProfile = { name: 'First Last' };

    beforeEach(async () => {
      userAPI.getUserProfile.mockImplementation(() => profile);

      await doGet();
    });

    it('calls API to get user profile', () => {
      expect(userAPI.getUserProfile).toHaveBeenCalledWith(token, userJid);
    });

    it('puts the profile', () => {
      expect(dispatch).toHaveBeenCalledWith(PutProfile.create(profile));
    });
  });

  describe('update()', () => {
    const { update } = profileActions;
    const doUpdate = async () => update(profile)(dispatch, getState, { userAPI, toastActions });

    const profile: UserProfile = { name: 'First Last' };

    beforeEach(async () => {
      await doUpdate();
    });

    it('calls API to update user profile', () => {
      expect(userAPI.updateUserProfile).toHaveBeenCalledWith(token, userJid, profile);
    });

    it('puts the new profile', () => {
      expect(dispatch).toHaveBeenCalledWith(PutProfile.create(profile));
      expect(toastActions.showSuccessToast).toHaveBeenCalledWith('Profile updated.');
    });
  });
});
