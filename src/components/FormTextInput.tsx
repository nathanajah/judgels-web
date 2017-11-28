import { FormGroup, Intent } from '@blueprintjs/core';
import * as classNames from 'classnames';
import * as React from 'react';

export interface FormTextInputProps {
  input: {
    name: string;
  };
  meta: {
    touched: boolean;
    valid: boolean;
    error?: string;
  };
  type?: 'password';
  label: string;
}

export const FormTextInput = (props: FormTextInputProps) => (
  <FormGroup
    labelFor={props.input.name}
    label={props.label}
    intent={!props.meta.touched || props.meta.valid ? undefined : Intent.DANGER}
  >
    <input
      {...props.input}
      type={props.type || 'text'}
      className={classNames('pt-input', { 'pt-intent-danger': props.meta.touched && !props.meta.valid })}
    />

    {props.meta.touched && !props.meta.valid && <div className="form-text-input-error pt-form-helper-text">{props.meta.error}</div>}
  </FormGroup>
);
