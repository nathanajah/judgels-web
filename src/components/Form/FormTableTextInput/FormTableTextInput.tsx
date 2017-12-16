import { FormGroup } from '@blueprintjs/core';
import * as classNames from 'classnames';
import * as React from 'react';

import { getIntent, getIntentClassName } from '../FormInputMeta';
import { FormInputProps } from '../FormInputProps';
import { FormInputValidation } from '../FormInputValidation/FormInputValidation';

export interface FormTextInputProps extends FormInputProps {
  type?: 'password';
}

export const FormTableTextInput = (props: FormTextInputProps) => {
  return (
    <tr>
      <td>
        {props.label}
      </td>
      <td>
        <FormGroup
          intent={getIntent(props.meta)}
        >
          <input
            {...props.input}
            type={props.type || 'text'}
            className={classNames('pt-input', getIntentClassName(props.meta))}
          />
          <FormInputValidation meta={props.meta}/>
        </FormGroup>
      </td>
    </tr>
  );
};
