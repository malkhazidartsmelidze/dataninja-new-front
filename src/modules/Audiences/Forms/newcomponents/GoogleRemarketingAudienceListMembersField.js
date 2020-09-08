import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default () => {
  return (
    <PanelField
      content={
        <SelectField
          defaultValue='page_visitors'
          name='list_member'
          options={listMemberFieldsOptions}
        />
      }
    />
  );
};

const listMemberFieldsOptions = [
  { name: 'Visitors of Page', value: 'page_visitors' },
  { name: 'Visitors of Page with specific tags', value: 'page_visitors_tags' },
];
