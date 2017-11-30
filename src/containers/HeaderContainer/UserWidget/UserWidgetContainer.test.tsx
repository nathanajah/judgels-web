import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, Store } from 'redux';

import { createUserWidgetContainer } from './UserWidgetContainer';
import { LogInSuccess, sessionReducer } from '../../../modules/session/sessionReducer';
import { AppState } from '../../../store/store';

describe('UserWidgetContainer', () => {
  let sessionActions: jest.Mocked<any>;
  let store: Store<AppState>;
  let wrapper: ReactWrapper<any, any>;

  const render = () => {
    const UserWidgetContainer = createUserWidgetContainer(sessionActions);

    wrapper = mount(
      <Provider store={store}>
        <UserWidgetContainer />
      </Provider>,
    );
  };

  beforeEach(() => {
    sessionActions = {
      logOut: jest.fn().mockReturnValue({ type: 'mock' }),
    };

    store = createStore(combineReducers({ session: sessionReducer }));
  });

  describe('when the dropdown for the current user is clicked', () => {
    beforeEach(() => {
      store.dispatch(LogInSuccess.create({ username: 'user', token: 'token123' }));
      render();

      wrapper.find('.widget-user__user').simulate('click');
    });

    it('dispatches logOut() when the "log out" menu item is clicked', () => {
      wrapper.find('.widget-user__user__logout').at(1).simulate('click');

      expect(sessionActions.logOut).toHaveBeenCalledWith('user');
    });
  });
});
