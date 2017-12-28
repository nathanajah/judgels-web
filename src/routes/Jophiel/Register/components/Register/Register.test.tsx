import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { Register, RegisterProps } from './Register';
import RegisterForm from '../RegisterForm/RegisterForm';

describe('Register', () => {
  let wrapper: ShallowWrapper;

  let onRegister: jest.Mock<any>;

  const render = () => {
    const props: RegisterProps = {
      onRegister,
    };

    wrapper = shallow(<Register {...props} />);
  };

  beforeEach(() => {
    onRegister = jest.fn();
    render();
  });

  it('shows the activation page after registration', async () => {
    const form = wrapper.find(RegisterForm);
    expect(form).toHaveLength(1);

    (form.props().onSubmit as any)({
      username: 'user',
      email: 'email@domain.com',
    });

    await new Promise(resolve => setImmediate(resolve));
    wrapper.update();

    expect(wrapper.find(RegisterForm)).toHaveLength(0);
    expect(wrapper.find('[data-key="instruction"]').text()).toContain('email@domain.com');
  });
});
