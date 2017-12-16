import { Button, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { FormTableTextInput } from '../../../../../../../components/Form/FormTableTextInput/FormTableTextInput';
import { UserInfo } from '../../../../../../../modules/api/jophiel/user';

const nameField = {
  name: 'name',
  label: 'Name',
};

const institutionField = {
  name: 'institution',
  label: 'Institution',
};

const UserInfoForm = (props: InjectedFormProps<UserInfo>) => (
  <form onSubmit={props.handleSubmit}>
    <table className="pt-table pt-striped">
      <tbody>
        <Field component={FormTableTextInput} {...nameField}/>
        <Field component={FormTableTextInput} {...institutionField}/>
      </tbody>
    </table>

    <Button type="submit" text="Update" intent={Intent.PRIMARY} loading={props.submitting}/>
  </form>
);

export default reduxForm<UserInfo>({ form: 'userInfo' })(UserInfoForm);
