import { INITIAL_STATE, PutWebConfig, webConfigReducer, WebConfigState } from './webConfigReducer';

describe('webConfigReducer', () => {
  test('PUT', () => {
    const state = INITIAL_STATE;
    const action = PutWebConfig.create({
      userRegistration: {
        enabled: true,
        useRecaptcha: true,
      },
    });
    const nextState: WebConfigState = {
      value: {
        userRegistration: {
          enabled: true,
          useRecaptcha: true,
        },
      },
    };
    expect(webConfigReducer(state, action)).toEqual(nextState);
  });

  test('other actions', () => {
    const state: WebConfigState = {
      value: {
        userRegistration: {
          enabled: true,
          useRecaptcha: true,
        },
      },
    };
    expect(webConfigReducer(state, { type: 'other' })).toEqual(state);
  });

  test('initial state', () => {
    expect(webConfigReducer(undefined as any, { type: 'other' })).toEqual(INITIAL_STATE);
  });
});
