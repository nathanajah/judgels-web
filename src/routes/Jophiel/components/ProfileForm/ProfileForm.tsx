import { Button, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { FormTableTextInput } from '../../../../components/Form/FormTableTextInput/FormTableTextInput';
import { UserProfile } from '../../../../modules/api/jophiel/user';
import { Required } from '../../../../utils/validations';
import { HorizontalDivider } from '../../../../components/Divider/HorizontalDivider';
import { ActionButtons } from '../../../../components/ActionButtons/ActionButtons';

const nameField = {
  name: 'name',
  label: 'Name',
  labelHelper: 'required',
  validate: [Required],
};

const institutionField = {
  name: 'institution',
  label: 'Institution',
  inputHelper: 'School/organization you represent',
};

export interface ProfileFormProps extends InjectedFormProps<UserProfile> {
  onCancel: () => void;
}

const ProfileForm = (props: ProfileFormProps) => (
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
      <Button data-key="cancel" text="Cancel" onClick={props.onCancel} disabled={props.submitting}/>
    </ActionButtons>
  </form>
);

export default reduxForm<UserProfile>({ form: 'profile' })(ProfileForm);
