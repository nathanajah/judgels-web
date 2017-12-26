import * as React from 'react';

import { UserProfile, userProfileGender } from '../../../../modules/api/jophiel/user';
import { FormTable, FormTableRow } from '../../../../components/Form/FormTable/FormTable';
import { HorizontalInnerDivider } from '../../../../components/Divider/HorizontalInnerDivider/HorizontalInnerDivider';

export interface ProfileTableProps {
  profile: UserProfile;
}

export const ProfileTable = (props: ProfileTableProps) => {
  const { profile } = props;

  const infoRows: FormTableRow[] = [
    { key: 'name', title: 'Name', value: profile.name },
    { key: 'gender', title: 'Gender', value: profile.gender && userProfileGender[profile.gender] },
    { key: 'nationality', title: 'Nationality', value: profile.nationality },
    { key: 'homeAddress', title: 'Home Address', value: profile.homeAddress },
    { key: 'shirtSize', title: 'Shirt Size', value: profile.shirtSize },

  ];

  const institutionRows: FormTableRow[] = [
    { key: 'institution', title: 'Name', value: profile.institution },
    { key: 'country', title: 'Country', value: profile.country },
    { key: 'provinceOrState', title: 'Province/State', value: profile.provinceOrState },
    { key: 'city', title: 'City', value: profile.city },
  ];

  return (
    <div>
      <h4>My Info</h4>
      <FormTable rows={infoRows}/>

      <HorizontalInnerDivider />

      <h4>My Institution</h4>
      <FormTable rows={institutionRows}/>
    </div>
  );
};
