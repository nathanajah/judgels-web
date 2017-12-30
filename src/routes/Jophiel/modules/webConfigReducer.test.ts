import { INITIAL_STATE, StoreWebConfig, webConfigReducer, WebConfigState } from './webConfigReducer';

describe('webConfigReducer', () => {
  it('handles STORE_CONFIG', () => {
    const state = INITIAL_STATE;
    const action = StoreWebConfig.create({
      recaptchaSiteKey: 'key123',
      userRegistrationUseRecaptcha: true,
    });
    const nextState: WebConfigState = {
      value: {
        recaptchaSiteKey: 'key123',
        userRegistrationUseRecaptcha: true,
      },
    };
    expect(webConfigReducer(state, action)).toEqual(nextState);
  });

  it('handles other actions', () => {
    const state: WebConfigState = {
      value: {
        recaptchaSiteKey: 'key123',
        userRegistrationUseRecaptcha: true,
      },
    };
    expect(webConfigReducer(state, { type: 'other' })).toEqual(state);
  });

  it('handles initial state', () => {
    expect(webConfigReducer(undefined as any, { type: 'other' })).toEqual(INITIAL_STATE);
  });
});
