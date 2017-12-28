import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { ForgotPassword, ForgotPasswordProps } from './ForgotPassword';
import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPasswordForm';

describe('ForgotPassword', () => {
  let wrapper: ShallowWrapper;

  let onForgetPassword: jest.Mock<any>;

  const render = () => {
    const props: ForgotPasswordProps = {
      onForgetPassword,
    };

    wrapper = shallow(<ForgotPassword {...props} />);
  };

  beforeEach(() => {
    onForgetPassword = jest.fn();
    render();
  });

  it('shows the instruction page after request', async () => {
    const form = wrapper.find(ForgotPasswordForm);
    expect(form).toHaveLength(1);

    (form.props().onSubmit as any)({ email: 'email@domain.com' });

    await new Promise(resolve => setImmediate(resolve));
    wrapper.update();

    expect(wrapper.find(ForgotPasswordForm)).toHaveLength(0);
    expect(wrapper.find('[data-key="instruction"]')).toHaveLength(1);
  });
});
