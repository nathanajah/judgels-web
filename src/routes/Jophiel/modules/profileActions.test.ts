import { profileActions } from './profileActions';
import { UserProfile } from '../../../modules/api/jophiel/user';
import { ClearProfile, StoreProfile } from './profilesReducer';

describe('profileActions', () => {
  let dispatch: jest.Mock<any>;

  const userJid = 'jid123';
  const token = 'token123';
  const getState = () => ({ session: { user: { jid: userJid }, token }});

  let userAPI: jest.Mocked<any>;

  beforeEach(() => {
    dispatch = jest.fn();

    userAPI = {
      getUserProfile: jest.fn(),
      updateUserProfile: jest.fn(),
    };
  });

  describe('get()', () => {
    const { get } = profileActions;
    const doGet = async () => get(userJid)(dispatch, getState, { userAPI });

    const profile: UserProfile = { name: 'First Last' };

    beforeEach(async () => {
      userAPI.getUserProfile.mockImplementation(() => profile);

      await doGet();
    });

    it('tries to get user profile', () => {
      expect(userAPI.getUserProfile).toHaveBeenCalledWith(token, userJid);
    });

    it('stores the profile', () => {
      expect(dispatch).toHaveBeenCalledWith(StoreProfile.create({ userJid, profile }));
    });
  });

  describe('update()', () => {
    const { update } = profileActions;
    const doUpdate = async () => update(userJid, profile)(dispatch, getState, { userAPI });

    const profile: UserProfile = { name: 'First Last' };

    beforeEach(async () => {
      await doUpdate();
    });

    it('tries to update user profile', () => {
      expect(userAPI.updateUserProfile).toHaveBeenCalledWith(token, userJid, profile);
    });

    it('stores the new profile', () => {
      expect(dispatch).toHaveBeenCalledWith(StoreProfile.create({ userJid, profile }));
    });
  });

  describe('clear()', () => {
    const { clear } = profileActions;
    const doClear = async () => clear(userJid)(dispatch);

    beforeEach(async () => {
      await doClear();
    });

    it('clears the profile', () => {
      expect(dispatch).toHaveBeenCalledWith(ClearProfile.create({ userJid }));
    });
  });
});
