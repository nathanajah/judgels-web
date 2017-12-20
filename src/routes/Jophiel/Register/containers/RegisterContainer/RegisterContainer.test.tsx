import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { createRegisterContainer } from './RegisterContainer';

describe('RegisterContainer', () => {
  let registerActions: jest.Mocked<any>;
  let wrapper: ReactWrapper<any, any>;

  beforeEach(() => {
    registerActions = {
      register: jest.fn().mockReturnValue({ type: 'mock-register', then: fn => fn() }),
    };

    const store = createStore(combineReducers({ form: formReducer }));
    const RegisterContainer = createRegisterContainer(registerActions);

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <RegisterContainer />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('has working register form', () => {
    const username = wrapper.find('input[name="username"]');
    username.simulate('change', { target: { value: 'user' } });

    const name = wrapper.find('input[name="name"]');
    name.simulate('change', { target: { value: 'name' } });

    const email = wrapper.find('input[name="email"]');
    email.simulate('change', { target: { value: 'email@domain.com' } });

    const password = wrapper.find('input[name="password"]');
    password.simulate('change', { target: { value: 'pass' } });

    const confirmPassword = wrapper.find('input[name="confirmPassword"]');
    confirmPassword.simulate('change', { target: { value: 'pass' } });

    const form = wrapper.find('form');
    form.simulate('submit');

    expect(registerActions.register.mock.calls[0][0]).toEqual({
      username: 'user',
      name: 'name',
      email: 'email@domain.com',
      password: 'pass',
    });
  });
});
