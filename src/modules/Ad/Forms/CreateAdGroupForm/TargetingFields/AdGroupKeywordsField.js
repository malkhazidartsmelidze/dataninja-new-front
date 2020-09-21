import React, { useEffect, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, Grid, Typography } from '@material-ui/core';

export default () => {
  const [value, setValue] = useState('');
  const [keywords, setKeywords] = useState({});

  const parseValues = () => {
    const splitted = value.split('\n');
    const _keywords = {};

    for (let i = 0, l = splitted.length; i < l; i++) {
      let k = splitted[i];
      if (!k) continue;
      let match_type = 'broad';
      if (k.startsWith('"') && k.endsWith('"')) {
        k = k.replace(/"/g, '');
        match_type = 'phrase';
      } else if (k.startsWith('[') && k.endsWith(']')) {
        k = k.replace(/\[/g, '').replace(/\]/g, '');
        match_type = 'exact';
      }

      if (!_keywords[match_type]) {
        _keywords[match_type] = [k];
      } else if (Array.isArray(_keywords[match_type]) && _keywords[match_type].indexOf(k) === -1) {
        _keywords[match_type].push(k);
      }
    }

    setKeywords(_keywords);
  };

  useEffect(() => {
    const deb = setTimeout(parseValues, 300);
    return () => clearTimeout(deb);
  }, [value]);

  return (
    <PanelField
      content={
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              label='Enter Keywords'
              variant='outlined'
              onChange={(e) => setValue(e.target.value)}
              multiline
              rows={10}
              value={value}
            />
          </Grid>
          <Grid item xs={8}>
            {Object.keys(keywords).map((match_type) => {
              return (
                <Typography
                  variant='body1'
                  key={match_type}
                  style={{ textTransform: 'capitalize' }}
                >
                  {match_type}: {keywords[match_type].join(', ')}
                </Typography>
              );
            })}
            <input type='hidden' name='targetings[keywords]' value={JSON.stringify(keywords)} />
          </Grid>
        </Grid>
      }
    />
  );
};
