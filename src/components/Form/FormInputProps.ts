import { FormInputMeta } from './FormInputMeta';

export interface FormInputProps {
  input: {
    name: string;
  };
  inputHelper?: string;
  meta: FormInputMeta;
  label: string;
  labelHelper?: string;
}
