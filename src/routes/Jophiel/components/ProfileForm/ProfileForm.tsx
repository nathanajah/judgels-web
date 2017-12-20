import { Button, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { FormTableTextInput } from '../../../../components/Form/FormTableTextInput/FormTableTextInput';
import { UserProfile } from '../../../../modules/api/jophiel/user';
import { Required } from '../../../../utils/validations';
import { HorizontalDivider } from '../../../../components/Divider/HorizontalDivider';
import { ActionButtons } from '../../../../components/ActionButtons/ActionButtons';
import { HorizontalInnerDivider } from '../../../../components/Divider/HorizontalInnerDivider';
import { FormTableTextArea } from 'components/Form/FormTableTextArea/FormTableTextArea';

const nameField = {
  name: 'name',
  label: 'Name',
  labelHelper: 'required',
  validate: [Required],
};

const genderField = {
  name: 'gender',
  label: 'Gender',
};

const nationalityField = {
  name: 'nationality',
  label: 'Nationality',
};

const homeAddressField = {
  name: 'homeAddress',
  label: 'Home Address',
};

const shirtSizeField = {
  name: 'shirtSize',
  label: 'Shirt Size',
};

const institutionField = {
  name: 'institution',
  label: 'Name',
};

const countryField = {
  name: 'country',
  label: 'Country',
};

const provinceOrStateField = {
  name: 'provinceOrState',
  label: 'Province/State',
};

const cityField = {
  name: 'city',
  label: 'City',
};

export interface ProfileFormProps extends InjectedFormProps<UserProfile> {
  onCancel: () => void;
}

const ProfileForm = (props: ProfileFormProps) => (
  <form onSubmit={props.handleSubmit}>
    <h4>My Info</h4>
    <table className="pt-table pt-striped">
      <tbody>
      <Field component={FormTableTextInput} {...nameField}/>
      <Field component={FormTableTextInput} {...genderField}/>
      <Field component={FormTableTextInput} {...nationalityField}/>
      <Field component={FormTableTextArea} {...homeAddressField}/>
      <Field component={FormTableTextInput} {...shirtSizeField}/>
      </tbody>
    </table>

    <HorizontalInnerDivider />

    <h4>My Institution (school/organization represented)</h4>
    <table className="pt-table pt-striped">
      <tbody>
      <Field component={FormTableTextInput} {...institutionField}/>
      <Field component={FormTableTextInput} {...countryField}/>
      <Field component={FormTableTextInput} {...provinceOrStateField}/>
      <Field component={FormTableTextInput} {...cityField}/>
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
