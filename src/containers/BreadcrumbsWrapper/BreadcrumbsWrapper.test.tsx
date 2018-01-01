import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router';
import createMockStore, { MockStore } from 'redux-mock-store';

import { AppState } from '../../modules/store';
import { withBreadcrumb } from './BreadcrumbsWrapper';
import { AddBreadcrumb, DelBreadcrumb } from '../../modules/breadcrumbs/breadcrumbsReducer';

describe('BreadcrumbsWrapper', () => {
  let store: MockStore<Partial<AppState>>;
  let wrapper: ReactWrapper<any, any>;
  let renderFn: jest.Mock<any>;

  class InnerComponent extends React.Component {
    render() {
      renderFn();
      return <div />;
    }
  }

  beforeEach(() => {
    store = createMockStore<Partial<AppState>>()({
      breadcrumbs: { values: [] },
    });
    renderFn = jest.fn();

    const WrappedComponent = withBreadcrumb('My Component')(InnerComponent);

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/component/first']}>
          <Route path="/component" component={WrappedComponent} />
        </MemoryRouter>
      </Provider>
    );
  });

  it('pushes a new breadcrumb when mounted', () => {
    expect(store.getActions()).toContainEqual(AddBreadcrumb.create({ link: '/component', title: 'My Component' }));
  });

  it('renders the inner component', () => {
    expect(renderFn).toHaveBeenCalled();
  });

  it('pops a breadcrumb when unmounted', () => {
    wrapper.unmount();
    expect(store.getActions()).toContainEqual(DelBreadcrumb.create({ link: '/component' }));
  });
});
