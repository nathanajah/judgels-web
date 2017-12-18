import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { push } from 'react-router-redux';
import configureStore, { MockStore } from 'redux-mock-store';

import { createUserWidgetContainer } from './UserWidgetContainer';

describe('UserWidgetContainer', () => {
  let logoutActions: jest.Mocked<any>;
  let store: MockStore<any>;
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
      logOut: jest.fn().mockReturnValue({ type: 'mock-logout' }),
    };

    store = configureStore()({
      session: {
        user: { username: 'user' },
        token: 'token123'
      }
    });
  });

  describe('when the dropdown for the current user is clicked', () => {
    beforeEach(() => {
      render();

      wrapper.find('.widget-user__user').simulate('click');
    });

    it('dispatches push("/profile") when the "profile" menu item is clicked', () => {
      wrapper.find('[data-key="profile"]').simulate('click');

      setTimeout(() => {
        expect(store.getActions()).toContainEqual(push('/profile'));
      });
    });

    it('dispatches logOut() when the "log out" menu item is clicked', async () => {
      wrapper.find('[data-key="logout"]').simulate('click');

      setTimeout(() => {
        expect(store.getActions()).toContainEqual({ type: 'mock-logout' });
      });
    });
  });
});
