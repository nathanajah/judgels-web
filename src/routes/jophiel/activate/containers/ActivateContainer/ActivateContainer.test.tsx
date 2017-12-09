import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';

import { createActivateContainer } from './ActivateContainer';

describe('ActivateContainer', () => {
  let activateActions: jest.Mocked<any>;
  let wrapper: ReactWrapper<any, any>;

  beforeEach(() => {
    activateActions = {
      activate: jest.fn().mockReturnValue({ type: 'mock' }),
    };

    const store = configureStore()({});
    const ActivateContainer = createActivateContainer(activateActions);

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ActivateContainer match={{ params: { emailCode: 'code' }}}/>
        </MemoryRouter>
      </Provider>,
    );
  });

  it('dispatches activate()', () => {
    expect(activateActions.activate).toHaveBeenCalledWith('code');
  });
});
