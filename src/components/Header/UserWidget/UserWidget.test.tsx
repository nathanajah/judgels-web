import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { UserWidget, UserWidgetProps } from './UserWidget';
import { User } from '../../../modules/api/jophiel/user';

describe('UserWidget', () => {
  let user: User|undefined;

  let wrapper: ShallowWrapper;

  const render = () => {
    const props: UserWidgetProps = {
      user,
      handleProfile: jest.fn(),
      handleLogOut: jest.fn(),
    };

    wrapper = shallow(
      <UserWidget {...props}/>
    );
  };

  beforeEach(() => {
    user = undefined;
  });

  describe('when the user is not logged in', () => {
    beforeEach(() => {
      render();
    });

    it('shows guest links', () => {
      expect(wrapper.find('.widget-user__login')).toHaveLength(1);
      expect(wrapper.find('.widget-user__register')).toHaveLength(1);
    });
  });

  describe('when the user is logged in', () => {
    beforeEach(() => {
      user = { username: 'user' };
      render();
    });

    it('shows the user widget', () => {
      expect(wrapper.find('.widget-user__user').text()).toContain('user');
    });
  });
});
