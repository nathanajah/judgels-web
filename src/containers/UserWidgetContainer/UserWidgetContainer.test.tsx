import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { push } from 'react-router-redux';
import createMockStore, { MockStore } from 'redux-mock-store';

import { createUserWidgetContainer } from './UserWidgetContainer';
import { AppState } from '../../modules/store';
import { sessionState } from '../../fixtures/state';

describe('UserWidgetContainer', () => {
  let logoutActions: jest.Mocked<any>;
  let store: MockStore<Partial<AppState>>;
  let wrapper: ReactWrapper<any, any>;

  const render = () => {
    const UserWidgetContainer = createUserWidgetContainer(logoutActions);

    wrapper = mount(
      <Provider store={store}>
        <UserWidgetContainer />
      </Provider>
    );
  };

  beforeEach(() => {
    logoutActions = {
      logOut: jest.fn().mockReturnValue({ type: 'mock-logout' }),
    };

    store = createMockStore<Partial<AppState>>()({ session: sessionState });
  });

  describe('when the dropdown for the current user is clicked', () => {
    beforeEach(() => {
      render();

      wrapper.find('.widget-user__user').simulate('click');
    });

    it('dispatches push("/account") when the "account" menu item is clicked', () => {
      wrapper
        .find('[data-key="account"]')
        .find('a')
        .simulate('click');

      expect(store.getActions()).toContainEqual(push('/account'));
    });

    it('dispatches logOut() when the "log out" menu item is clicked', () => {
      wrapper
        .find('[data-key="logout"]')
        .find('a')
        .simulate('click');

      expect(store.getActions()).toContainEqual({ type: 'mock-logout' });
    });
  });
});
