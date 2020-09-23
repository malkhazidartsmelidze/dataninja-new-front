import React, { useEffect, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import useCreateAd from 'modules/Ad/store/CreateAdContext';

export default () => {
  const [options, setOptions] = useState({});
  const { type } = useCreateAd();

  useEffect(() => {
    if (type === 'search') {
      setOptions({ ...searchOptions });
    } else {
      setOptions({ ...displayOptions });
    }
  }, [type]);

  return (
    <PanelField>
      <SelectField name='campaign_type' defaultValue='traffic' options={Object.values(options)} />
    </PanelField>
  );
};

const displayOptions = { traffic: { name: 'Traffic To Website', value: 'traffic' } };
const searchOptions = {
  traffic: { name: 'Get More Traffic', value: 'traffic' },
  conversions: { name: 'Get More Conversions', value: 'conversions' },
};
