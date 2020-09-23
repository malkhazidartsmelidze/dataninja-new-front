import React, { Fragment } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default () => {
  return (
    <PanelField
      content={
        <Fragment>
          <SelectField
            name='campaign_partner_networks'
            defaultValue='1'
            options={partnerNetworksOption}
          />
          <SelectField
            name='campaign_display_networks'
            defaultValue='1'
            options={displayNetworksOption}
          />
        </Fragment>
      }
    />
  );
};

const partnerNetworksOption = [
  { name: 'Include Partner Search Network', value: '1' },
  { name: "Don't Include Partner Search Network", value: '0' },
];

const displayNetworksOption = [
  { name: 'Include Display Network', value: '1' },
  { name: "Don't Include Display Network", value: '0' },
];
