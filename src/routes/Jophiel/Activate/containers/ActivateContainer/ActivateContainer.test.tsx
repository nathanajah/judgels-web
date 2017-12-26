import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router';
import createMockStore, { MockStore } from 'redux-mock-store';

import { createActivateContainer } from './ActivateContainer';

describe('ActivateContainer', () => {
  let activateActions: jest.Mocked<any>;
  let store: MockStore<any>;
  let wrapper: ReactWrapper<any, any>;

  beforeEach(() => {
    activateActions = {
      activate: jest.fn(code => ({ type: 'mock-activate', emailCode: code })),
    };

    store = createMockStore()({});
    const ActivateContainer = createActivateContainer(activateActions);

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/activate/code123']}>
          <Route exact path="/activate/:emailCode" component={ActivateContainer}/>
        </MemoryRouter>
      </Provider>,
    );
  });

  it('dispatches activate()', () => {
    expect(store.getActions()).toContainEqual({ type: 'mock-activate', emailCode: 'code123' });
  });
});
