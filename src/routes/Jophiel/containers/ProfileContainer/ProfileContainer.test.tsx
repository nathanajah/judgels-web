import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { createProfileContainer } from './ProfileContainer';
import { UserProfile } from '../../../../modules/api/jophiel/user';
import { jophielReducer } from '../../modules/jophielReducer';

describe('ProfileContainer', () => {
  let profileActions: jest.Mocked<any>;
  let wrapper: ReactWrapper<any, any>;

  beforeEach(() => {
    profileActions = {
      get: jest.fn().mockReturnValue({ type: 'mock-get', then: fn => fn() }),
      update: jest.fn().mockReturnValue({ type: 'mock-update', then: fn => fn() }),
      clear: jest.fn().mockReturnValue({ type: 'mock-clear', then: fn => fn() }),
    };

    const profile: UserProfile = {
      name: 'My Name',
      institution: 'My Institution',
    };

    const store = createStore(
      combineReducers({ form: formReducer, jophiel: jophielReducer }),
      { jophiel: { profiles: { ['jid123']: profile } } });

    const ProfileContainer = createProfileContainer(profileActions);

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ProfileContainer userJid="jid123"/>
        </MemoryRouter>
      </Provider>,
    );
  });

  test('integration', async () => {
    expect(profileActions.get).toHaveBeenCalledWith('jid123');

    expect(wrapper.find('[data-key="name"]').text()).toEqual('My Name');
    expect(wrapper.find('[data-key="institution"]').text()).toEqual('My Institution');

    wrapper.find('button[data-key="edit"]').simulate('click');

    const name = wrapper.find('input[name="name"]');
    name.simulate('change', { target: { value: 'My New Name' } });

    const institution = wrapper.find('input[name="institution"]');
    institution.simulate('change', { target: { value: 'My New Institution' } });

    const form = wrapper.find('form');
    form.simulate('submit');

    expect(profileActions.update).toHaveBeenCalledWith('jid123', {
      name: 'My New Name',
      institution: 'My New Institution',
    });

    await new Promise((resolve) => setImmediate(resolve));

    wrapper.unmount();
    expect(profileActions.clear).toHaveBeenCalledWith('jid123');
  });
});
