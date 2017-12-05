import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { createLoginContainer } from './LoginContainer';

describe('LoginContainer', () => {
  let loginActions: jest.Mocked<any>;
  let wrapper: ReactWrapper<any, any>;

  beforeEach(() => {
    loginActions = {
      logIn: jest.fn().mockReturnValue({ type: 'mock' }),
    };

    const store = createStore(combineReducers({ form: formReducer }));
    const LoginContainer = createLoginContainer(loginActions);

    wrapper = mount(
      <Provider store={store}>
        <LoginContainer />
      </Provider>,
    );
  });

  it('dispatches logIn() when the form is submitted', () => {
    const username = wrapper.find('input[name="username"]');
    username.simulate('change', { target: { value: 'user' } });

    const password = wrapper.find('input[name="password"]');
    password.simulate('change', { target: { value: 'pass' } });

    const form = wrapper.find('form');
    form.simulate('submit');

    expect(loginActions.logIn).toHaveBeenCalledWith('user', 'pass');
  });
});