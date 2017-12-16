import { FormInputMeta } from './FormInputMeta';

export interface FormInputProps {
  input: {
    name: string;
  };
  meta: FormInputMeta;
  label: string;
}
