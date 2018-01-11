import { Button, Intent } from '@blueprintjs/core';
import * as CountryList from 'country-list';
import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { FormTableTextInput } from '../../../../../components/forms/FormTableTextInput/FormTableTextInput';
import { Required } from '../../../../../components/forms/validations';
import { HorizontalDivider } from '../../../../../components/Divider/HorizontalDivider/HorizontalDivider';
import { HorizontalInnerDivider } from '../../../../../components/Divider/HorizontalInnerDivider/HorizontalInnerDivider';
import { ActionButtons } from '../../../../../components/ActionButtons/ActionButtons';
import { FormTableTextArea } from '../../../../../components/forms/FormTableTextArea/FormTableTextArea';
import { FormTableSelect } from '../../../../../components/forms/FormTableSelect/FormTableSelect';
import { UserProfile } from '../../../../../modules/api/jophiel/user';

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

const provinceField = {
  name: 'province',
  label: 'Province/State',
};

const cityField = {
  name: 'city',
  label: 'City',
};

export interface ProfileFormProps extends InjectedFormProps<UserProfile> {
  onCancel: () => void;
}

const ProfileForm = (props: ProfileFormProps) => {
  const countryOptions = CountryList()
    .getNames()
    .map(name => (
      <option key={name} value={name}>
        {name}
      </option>
    ));

  return (
    <form onSubmit={props.handleSubmit}>
      <h4>My Info</h4>
      <table className="pt-table pt-striped">
        <tbody>
          <Field component={FormTableTextInput} {...nameField} />
          <Field component={FormTableSelect} {...genderField}>
            <option />
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </Field>
          <Field component={FormTableSelect} {...nationalityField}>
            <option />
            {countryOptions}
          </Field>
          <Field component={FormTableTextArea} {...homeAddressField} />
          <Field component={FormTableSelect} {...shirtSizeField}>
            <option />
            <option value="XXS">XXS</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="XXXL">XXXL</option>
          </Field>
        </tbody>
      </table>

      <HorizontalInnerDivider />

      <h4>My Institution (school/organization represented)</h4>
      <table className="pt-table pt-striped">
        <tbody>
          <Field component={FormTableTextInput} {...institutionField} />
          <Field component={FormTableSelect} {...countryField}>
            <option />
            {countryOptions}
          </Field>
          <Field component={FormTableTextInput} {...provinceField} />
          <Field component={FormTableTextInput} {...cityField} />
        </tbody>
      </table>

      <HorizontalDivider />

      <ActionButtons>
        <Button type="submit" text="Save changes" intent={Intent.PRIMARY} loading={props.submitting} />
        <Button data-key="cancel" text="Cancel" onClick={props.onCancel} disabled={props.submitting} />
      </ActionButtons>
    </form>
  );
};

export default reduxForm<UserProfile>({ form: 'profile' })(ProfileForm);
