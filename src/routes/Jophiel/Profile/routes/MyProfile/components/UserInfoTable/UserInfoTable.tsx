import { Button, Intent } from '@blueprintjs/core';
import * as React from 'react';

import { UserInfo } from '../../../../../../../modules/api/jophiel/user';
import { FormTable, FormTableRow } from '../../../../../../../components/FormTable/FormTable';
import { HorizontalDivider } from '../../../../../../../components/Divider/HorizontalDivider';

export interface UserInfoTableProps {
  userInfo: UserInfo;
  onEdit: () => void;
}

export const UserInfoTable = (props: UserInfoTableProps) => {
  const { userInfo } = props;
  const rows: FormTableRow[] = [
    { title: 'Name', value: userInfo.name },
    { title: 'Institution', value: userInfo.institution },
  ];

  return (
    <div>
      <FormTable rows={rows}/>

      <HorizontalDivider />

      <Button text="Edit" intent={Intent.PRIMARY} onClick={props.onEdit}/>
    </div>
  );
};
