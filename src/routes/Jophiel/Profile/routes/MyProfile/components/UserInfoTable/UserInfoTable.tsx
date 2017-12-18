import * as React from 'react';

import { UserInfo } from '../../../../../../../modules/api/jophiel/user';
import { FormTable, FormTableRow } from '../../../../../../../components/FormTable/FormTable';

export interface UserInfoTableProps {
  userInfo: UserInfo;
}

export const UserInfoTable = (props: UserInfoTableProps) => {
  const { userInfo } = props;
  const rows: FormTableRow[] = [
    { key: 'name', title: 'Name', value: userInfo.name },
    { key: 'institution', title: 'Institution', value: userInfo.institution },
  ];

  return <FormTable rows={rows}/>;
};
