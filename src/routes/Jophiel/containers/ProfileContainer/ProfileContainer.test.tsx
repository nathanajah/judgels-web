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
      gender: 'MALE',
      nationality: 'My Nation',
      homeAddress: 'My Address',
      shirtSize: 'XL',
      institution: 'My Institution',
      country: 'My Country',
      provinceOrState: 'My Province',
      city: 'My City',
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

  it('has working profile form', async () => {
    expect(profileActions.get).toHaveBeenCalledWith('jid123');

    expect(wrapper.find('[data-key="name"]').text()).toEqual('My Name');
    expect(wrapper.find('[data-key="gender"]').text()).toEqual('MALE');
    expect(wrapper.find('[data-key="nationality"]').text()).toEqual('My Nation');
    expect(wrapper.find('[data-key="homeAddress"]').text()).toEqual('My Address');
    expect(wrapper.find('[data-key="shirtSize"]').text()).toEqual('XL');
    expect(wrapper.find('[data-key="institution"]').text()).toEqual('My Institution');
    expect(wrapper.find('[data-key="country"]').text()).toEqual('My Country');
    expect(wrapper.find('[data-key="provinceOrState"]').text()).toEqual('My Province');
    expect(wrapper.find('[data-key="city"]').text()).toEqual('My City');

    wrapper.find('button[data-key="edit"]').simulate('click');

    const name = wrapper.find('input[name="name"]');
    name.simulate('change', { target: { value: 'My New Name' } });

    const gender = wrapper.find('input[name="gender"]');
    gender.simulate('change', { target: { value: 'FEMALE' } });

    const nationality = wrapper.find('input[name="nationality"]');
    nationality.simulate('change', { target: { value: 'My New Nation' } });

    const homeAddress = wrapper.find('textarea[name="homeAddress"]');
    homeAddress.simulate('change', { target: { value: 'My New Address' } });

    const shirtSize = wrapper.find('input[name="shirtSize"]');
    shirtSize.simulate('change', { target: { value: 'S' } });

    const institution = wrapper.find('input[name="institution"]');
    institution.simulate('change', { target: { value: 'My New Institution' } });

    const country = wrapper.find('input[name="country"]');
    country.simulate('change', { target: { value: 'My New Country' } });

    const provinceOrState = wrapper.find('input[name="provinceOrState"]');
    provinceOrState.simulate('change', { target: { value: 'My New Province' } });

    const city = wrapper.find('input[name="city"]');
    city.simulate('change', { target: { value: 'My New City' } });

    const form = wrapper.find('form');
    form.simulate('submit');

    expect(profileActions.update).toHaveBeenCalledWith('jid123', {
      name: 'My New Name',
      gender: 'FEMALE',
      nationality: 'My New Nation',
      homeAddress: 'My New Address',
      shirtSize: 'S',
      institution: 'My New Institution',
      country: 'My New Country',
      provinceOrState: 'My New Province',
      city: 'My New City',
    });

    await new Promise((resolve) => setImmediate(resolve));

    wrapper.unmount();
    expect(profileActions.clear).toHaveBeenCalledWith('jid123');
  });
});
