import { profileActions } from './profileActions';
import { DelProfile, PutProfile } from './profileReducer';
import { UserProfile } from '../../../modules/api/jophiel/user';
import { AppState } from '../../../modules/store';
import { sessionState } from '../../../fixtures/state';

describe('profileActions', () => {
  let dispatch: jest.Mock<any>;

  const userJid = 'jid123';
  const token = 'token123';
  const getState = (): Partial<AppState> => ({ session: sessionState });

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
    const doGet = async () => get('jid123')(dispatch, getState, { userAPI });

    const profile: UserProfile = { name: 'First Last' };

    beforeEach(async () => {
      userAPI.getUserProfile.mockImplementation(() => profile);

      await doGet();
    });

    it('calls API to get user profile', () => {
      expect(userAPI.getUserProfile).toHaveBeenCalledWith(token, userJid);
    });

    it('puts the profile', () => {
      expect(dispatch).toHaveBeenCalledWith(PutProfile.create({ userJid, value: profile }));
    });
  });

  describe('update()', () => {
    const { update } = profileActions;
    const doUpdate = async () => update(userJid, profile)(dispatch, getState, { userAPI });

    const profile: UserProfile = { name: 'First Last' };

    beforeEach(async () => {
      await doUpdate();
    });

    it('calls API to update user profile', () => {
      expect(userAPI.updateUserProfile).toHaveBeenCalledWith(token, userJid, profile);
    });

    it('puts the new profile', () => {
      expect(dispatch).toHaveBeenCalledWith(PutProfile.create({ userJid, value: profile }));
    });
  });

  describe('clear()', () => {
    const { clear } = profileActions;
    const doClear = async () => clear(userJid)(dispatch);

    beforeEach(async () => {
      await doClear();
    });

    it('clears the profile', () => {
      expect(dispatch).toHaveBeenCalledWith(DelProfile.create({ userJid }));
    });
  });
});
