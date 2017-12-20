import { ClearProfile, profilesReducer, ProfilesState, StoreProfile } from './profilesReducer';

describe('profilesReducer', () => {
  it('handles STORE_PROFILE', () => {
    const state : ProfilesState = {
      ['jid123']: { name: 'First Last' },
    };
    const action = StoreProfile.create({
      userJid: 'jid456',
      profile: { name: 'Second Third' },
    });
    const nextState: ProfilesState = {
      ['jid123']: { name: 'First Last' },
      ['jid456']: { name: 'Second Third' },
    };
    expect(profilesReducer(state, action)).toEqual(nextState);
  });

  it('handles CLEAR_PROFILE', () => {
    const state: ProfilesState = {
      ['jid123']: { name: 'First Last' },
      ['jid456']: { name: 'Second Third' },
    };
    const nextState : ProfilesState = {
      ['jid123']: { name: 'First Last' },
    };
    const action = ClearProfile.create({ userJid: 'jid456' });
    expect(profilesReducer(state, action)).toEqual(nextState);
  });
});
