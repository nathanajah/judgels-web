import { FormGroup, Intent } from '@blueprintjs/core';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { FormTextInput, FormTextInputProps } from './FormTextInput';

describe('FormTextInput', () => {
  let wrapper: ShallowWrapper;
  let name: string;
  let touched: boolean;
  let valid: boolean;
  let error: string;
  let label: string;

  const render = () => {
    const props: FormTextInputProps = {
      input: { name },
      meta: { touched, valid, error },
      label,
    };

    wrapper = shallow(
      <FormTextInput {...props}/>
    );
  };

  beforeEach(() => {
    name = 'username';
    touched = false;
    valid = false;
    error = 'Required';
    label = 'label';
  });

  describe('when the input is first rendered', () => {
    beforeEach(() => {
      render();
    });

    it('does not show any errors', () => {
      expect(wrapper.find(FormGroup).props().intent).toBeUndefined();
      expect(wrapper.find('input').hasClass('pt-intent-danger')).toBeFalsy();
      expect(wrapper.find('.form-text-input-error')).toHaveLength(0);
    });
  });

  describe('when the input is valid', () => {
    beforeEach(() => {
      touched = true;
      valid = true;
      render();
    });

    it('does not show any errors', () => {
      expect(wrapper.find(FormGroup).props().intent).toBeUndefined();
      expect(wrapper.find('input').hasClass('pt-intent-danger')).toBeFalsy();
      expect(wrapper.find('.form-text-input-error')).toHaveLength(0);
    });
  });

  describe('when the input is invalid', () => {
    beforeEach(() => {
      touched = true;
      valid = false;
      render();
    });

    it('shows the error', () => {
      expect(wrapper.find(FormGroup).props().intent).toEqual(Intent.DANGER);
      expect(wrapper.find('input').hasClass('pt-intent-danger')).toBeTruthy();
      expect(wrapper.find('.form-text-input-error').text()).toEqual('Required');
    });
  });
});
