import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, Store } from 'redux';

import { createUserWidgetContainer } from './UserWidgetContainer';
import { AppState } from '../../../store/store';
import { sessionReducer, StartSession } from '../../../modules/session/sessionReducer';

describe('UserWidgetContainer', () => {
  let logoutActions: jest.Mocked<any>;
  let store: Store<AppState>;
  let wrapper: ReactWrapper<any, any>;

  const render = () => {
    const UserWidgetContainer = createUserWidgetContainer(logoutActions);

    wrapper = mount(
      <Provider store={store}>
        <UserWidgetContainer />
      </Provider>,
    );
  };

  beforeEach(() => {
    logoutActions = {
      logOut: jest.fn().mockReturnValue({ type: 'mock' }),
    };

    store = createStore(combineReducers({ session: sessionReducer }));
  });

  describe('when the dropdown for the current user is clicked', () => {
    beforeEach(() => {
      store.dispatch(StartSession.create({
        user: { username: 'user' },
        token: 'token123'
      }));
      render();

      wrapper.find('.widget-user__user').simulate('click');
    });

    it('dispatches logOut() when the "log out" menu item is clicked', () => {
      wrapper.find('.widget-user__user__logout').at(1).simulate('click');

      expect(logoutActions.logOut).toHaveBeenCalledWith();
    });
  });
});
