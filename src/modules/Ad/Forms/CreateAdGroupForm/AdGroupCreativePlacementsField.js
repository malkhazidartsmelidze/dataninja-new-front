import React, { Fragment, useEffect, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import AutocompleteField from 'components/Fields/AutocompleteField';
import AdFormService from 'services/AdFormService';

export default () => {
  const [placements, setPlacements] = useState([
    { name: 'Facebook', value: 'facebook' },
    { name: 'Instagram', value: 'instagram' },
    { name: 'Messenger', value: 'messenger' },
    { name: 'Audience Network', value: 'audience_network' },
  ]);
  const [options, setOptions] = useState([
    { name: 'Facebook', value: 'facebook' },
    { name: 'Instagram', value: 'instagram' },
    { name: 'Messenger', value: 'messenger' },
    { name: 'Audience Network', value: 'audience_network' },
    { name: 'Gmail', value: 'gmail' },
  ]);

  const onPlacementChange = (e, newValues) => {
    if (!Array.isArray(newValues)) return;
    setPlacements(newValues);
  };

  return (
    <PanelField
      content={
        <Fragment>
          {placements.map((l) => {
            return <input type='hidden' name='targetings[placements][]' value={l.value} />;
          })}
          <AutocompleteField
            placeholder='Enter Placements'
            options={options}
            value={placements}
            onChange={onPlacementChange}
          />
        </Fragment>
      }
    />
  );
};
