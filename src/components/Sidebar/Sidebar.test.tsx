import { Icon, Tab2, Tabs2 } from '@blueprintjs/core';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { Sidebar, SidebarProps } from './Sidebar';

describe('Sidebar', () => {
  let onItemClick: jest.Mock<any>;

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    onItemClick = jest.fn();

    const props: SidebarProps = {
      id: 'side',
      title: 'Side',
      parentPath: '/side',
      items: [
        { id: 'first', title: 'First' },
        { id: 'second', title: 'Second' },
        { id: 'third', title: 'Third' },
      ],
      onItemClick,
    };

    wrapper = shallow(
      <Sidebar {...props}/>
    );
  });

  it('shows sidebar items with the correct texts', () => {
    const items = wrapper.find(Tab2);
    expect(items).toHaveLength(3);

    expect(items.at(0).childAt(0).text()).toEqual('First');
    expect(items.at(1).childAt(0).text()).toEqual('Second');
    expect(items.at(2).childAt(0).text()).toEqual('Third');
  });

  it('has the first item active by default', () => {
    const items = wrapper.find(Tab2);
    expect(items.at(0).find(Icon)).toHaveLength(1);
    expect(items.at(1).find(Icon)).toHaveLength(0);
    expect(items.at(2).find(Icon)).toHaveLength(0);
  });

  describe('when another item is clicked', () => {
    beforeEach(() => {
      (wrapper.find(Tabs2).props().onChange as any)('third', 'first');
      wrapper.update();
    });

    it('calls the onItemClick props with the item id', () => {
      expect(onItemClick).toHaveBeenCalledWith('/side', 'third');
    });

    it('causes that item to be active', () => {
      const items = wrapper.find(Tab2);
      expect(items.at(0).find(Icon)).toHaveLength(0);
      expect(items.at(1).find(Icon)).toHaveLength(0);
      expect(items.at(2).find(Icon)).toHaveLength(1);
    });
  });
});
