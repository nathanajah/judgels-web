import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { createForgotPasswordContainer } from './ForgotPasswordContainer';

describe('ForgotPasswordContainer', () => {
  let forgotPasswordActions: jest.Mocked<any>;
  let wrapper: ReactWrapper<any, any>;

  beforeEach(() => {
    forgotPasswordActions = {
      requestToReset: jest.fn().mockReturnValue({ type: 'mock-requestToReset' }),
    };

    const store = createStore(combineReducers({ form: formReducer }));
    const ForgotPasswordContainer = createForgotPasswordContainer(forgotPasswordActions);

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ForgotPasswordContainer />
        </MemoryRouter>
      </Provider>
    );
  });

  it('has working forgot password form', () => {
    const email = wrapper.find('input[name="email"]');
    email.simulate('change', { target: { value: 'email@domain.com' } });

    const form = wrapper.find('form');
    form.simulate('submit');

    expect(forgotPasswordActions.requestToReset).toHaveBeenCalledWith('email@domain.com');
  });
});
