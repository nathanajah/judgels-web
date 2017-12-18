import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { createMyProfileContainer } from './MyProfileContainer';
import { UserInfo } from '../../../../../../../modules/api/jophiel/user';
import { profileReducer } from '../../../../modules/profileReducer';

describe('MyProfileContainer', () => {
  let userInfoActions: jest.Mocked<any>;
  let wrapper: ReactWrapper<any, any>;

  beforeEach(() => {
    userInfoActions = {
      getMine: jest.fn().mockReturnValue({ type: 'mock-getMine', then: fn => fn() }),
      updateMine: jest.fn().mockReturnValue({ type: 'mock-updateMine', then: fn => fn() }),
    };

    const userInfo: UserInfo = {
      name: 'My Name',
      institution: 'My Institution',
    };

    const store = createStore(
      combineReducers({ form: formReducer, jophiel: combineReducers({ profile: profileReducer }) }),
      { jophiel: { profile: { userInfo } } } );

    const MyProfileContainer = createMyProfileContainer(userInfoActions);

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <MyProfileContainer />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('shows editable user info', () => {
    expect(userInfoActions.getMine).toHaveBeenCalled();

    expect(wrapper.find('[data-key="name"]').text()).toEqual('My Name');
    expect(wrapper.find('[data-key="institution"]').text()).toEqual('My Institution');

    wrapper.find('button[data-key="edit"]').simulate('click');

    const name = wrapper.find('input[name="name"]');
    name.simulate('change', { target: { value: 'My New Name' } });

    const institution = wrapper.find('input[name="institution"]');
    institution.simulate('change', { target: { value: 'My New Institution' } });

    const form = wrapper.find('form');
    form.simulate('submit');

    setTimeout(() => {
      expect(userInfoActions.updateMine).toHaveBeenCalledWith({
        name: 'My New Name',
        institution: 'My New Institution',
      });

      expect(wrapper.find('[data-key="name"]').text()).toEqual('My New Name');
      expect(wrapper.find('[data-key="institution"]').text()).toEqual('My Institution');

      wrapper.find('button[data-key="cancel"]').simulate('click');

      setTimeout(() => {
        expect(wrapper.find('form')).toHaveLength(0);
      });
    });
  });
});
