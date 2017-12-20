import * as React from 'react';

import { UserProfile } from '../../../../modules/api/jophiel/user';
import { FormTable, FormTableRow } from '../../../../components/FormTable/FormTable';

export interface ProfileTableProps {
  profile: UserProfile;
}

export const ProfileTable = (props: ProfileTableProps) => {
  const { profile } = props;
  const rows: FormTableRow[] = [
    { key: 'name', title: 'Name', value: profile.name },
    { key: 'institution', title: 'Institution', value: profile.institution },
  ];

  return <FormTable rows={rows}/>;
};
