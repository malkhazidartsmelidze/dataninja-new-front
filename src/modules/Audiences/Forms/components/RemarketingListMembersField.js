import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default () => {
  const [listMember, setListMember] = useState('page_visitors');

  const onChange = (e) => {
    setListMember(e.target.value);
  };

  return (
    <PanelField
      content={
        <SelectField value={listMember} options={listMemberFieldsOptions} onChange={onChange} />
      }
    />
  );
};

const listMemberFieldsOptions = [
  { name: 'Visitors of Page', value: 'page_visitors' },
  { name: 'Visitors of Page with specific tags', value: 'page_visitors_tags' },
];
