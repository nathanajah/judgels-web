import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { Login } from './Login';

describe('Login', () => {
  let handleLogIn: any;
  let wrapper: ReactWrapper<any, any>;

  beforeEach(() => {
    const store = createStore(combineReducers({ form: formReducer }));

    handleLogIn = jest.fn();
    wrapper = mount(
      <Provider store={store}>
        <Login handleLogIn={handleLogIn}/>
      </Provider>,
    );
  });

  it('handles login when submitted', () => {
    const username = wrapper.find('input[name="username"]');
    username.simulate('change', { target: { value: 'user' } });

    const password = wrapper.find('input[name="password"]');
    password.simulate('change', { target: { value: 'pass' } });

    const form = wrapper.find('form');
    form.simulate('submit');

    expect(handleLogIn).toHaveBeenCalledWith('user', 'pass');
  });
});
