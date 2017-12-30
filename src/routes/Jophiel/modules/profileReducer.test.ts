import { DelProfile, INITIAL_STATE, profileReducer, ProfileState, PutProfile } from './profileReducer';

describe('profileReducer', () => {
  test('PUT', () => {
    const state: ProfileState = {
      values: {
        ['jid123']: { name: 'First Last' },
      },
    };
    const action = PutProfile.create({
      userJid: 'jid456',
      value: { name: 'Second Third' },
    });
    const nextState: ProfileState = {
      values: {
        ['jid123']: { name: 'First Last' },
        ['jid456']: { name: 'Second Third' },
      },
    };
    expect(profileReducer(state, action)).toEqual(nextState);
  });

  test('DEL', () => {
    const state: ProfileState = {
      values: {
        ['jid123']: { name: 'First Last' },
        ['jid456']: { name: 'Second Third' },
      },
    };
    const nextState: ProfileState = {
      values: {
        ['jid123']: { name: 'First Last' },
      },
    };
    const action = DelProfile.create({ userJid: 'jid456' });
    expect(profileReducer(state, action)).toEqual(nextState);
  });

  test('other actions', () => {
    const state: ProfileState = {
      values: {
        ['jid123']: { name: 'First Last' },
        ['jid456']: { name: 'Second Third' },
      },
    };
    expect(profileReducer(state, { type: 'other' })).toEqual(state);
  });

  test('initial state', () => {
    expect(profileReducer(undefined as any, { type: 'other' })).toEqual(INITIAL_STATE);
  });
});
