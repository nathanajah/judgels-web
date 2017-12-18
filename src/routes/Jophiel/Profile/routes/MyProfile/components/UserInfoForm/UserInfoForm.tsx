import { Button, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { FormTableTextInput } from '../../../../../../../components/Form/FormTableTextInput/FormTableTextInput';
import { UserInfo } from '../../../../../../../modules/api/jophiel/user';
import { Required } from '../../../../../../../utils/validations';
import { HorizontalDivider } from '../../../../../../../components/Divider/HorizontalDivider';
import { ActionButtons } from '../../../../../../../components/ActionButtons/ActionButtons';

const nameField = {
  name: 'name',
  label: 'Name',
  labelHelper: 'required',
  validate: [Required],
};

const institutionField = {
  name: 'institution',
  label: 'Institution',
  inputHelper: 'School/uni',
};

export interface UserInfoFormProps extends InjectedFormProps<UserInfo> {
  onCancel: () => void;
}

const UserInfoForm = (props: UserInfoFormProps) => (
  <form onSubmit={props.handleSubmit}>
    <table className="pt-table pt-striped">
      <tbody>
        <Field component={FormTableTextInput} {...nameField}/>
        <Field component={FormTableTextInput} {...institutionField}/>
      </tbody>
    </table>

    <HorizontalDivider />

    <ActionButtons>
      <Button type="submit" text="Save changes" intent={Intent.PRIMARY} loading={props.submitting}/>
      <Button text="Cancel" onClick={props.onCancel} disabled={props.submitting}/>
    </ActionButtons>
  </form>
);

export default reduxForm<UserInfo>({ form: 'userInfo' })(UserInfoForm);
