import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import parseHostFromUrl from 'common/parseHostFromUrl';
import useCreateAd from 'modules/Ad/store/CreateAdContext';

export default () => {
  const [value, setValue] = useState('https://github.com');
  const [error, setError] = useState(false);
  const { setState } = useCreateAd();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const setDisplayLink = () => {
    const host = parseHostFromUrl(value);
    if (!host) {
      return setError(true);
    }

    setState({ display_link: host });
  };

  useEffect(() => {
    const deb = setTimeout(() => {
      setDisplayLink();
    }, 500);
    return () => clearTimeout(deb);
  }, [value]);

  return (
    <PanelField
      content={
        <TextField
          label='Enter Creative Url'
          error={error}
          value={value}
          onChange={handleChange}
          name='creative_url'
        />
      }
    />
  );
};
