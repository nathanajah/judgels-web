import * as React from 'react';

import { UserInfo } from '../../../../../../../modules/api/jophiel/user';
import { FormTable, FormTableRow } from '../../../../../../../components/FormTable/FormTable';

export interface UserInfoTableProps {
  userInfo: UserInfo;
}

export const UserInfoTable = (props: UserInfoTableProps) => {
  const { userInfo } = props;
  const rows: FormTableRow[] = [
    { title: 'Name', value: userInfo.name },
    { title: 'Institution', value: userInfo.institution },
  ];

  return <FormTable rows={rows}/>;
};
