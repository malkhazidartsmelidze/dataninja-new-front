import React, { useEffect, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, Grid, Typography } from '@material-ui/core';

export default () => {
  const [includedKeywords, setIncludedKeywords] = useState(
    '[asdf]\n"asda"\nasqwwe\n"qwewew"\n[asdfsdfdf]'
  );
  const [excludedKeywords, setExcludedKeywords] = useState('"qwewew"\n[asdfsdfdf]');
  const [excludedParseds, setExcludedParseds] = useState({});
  const [includedParseds, setIncludedParseds] = useState({});

  const parseValues = (val) => {
    const splitted = val.split('\n');
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

    return _keywords;
  };

  useEffect(() => {
    const deb = setTimeout(() => {
      const ks = parseValues(includedKeywords);
      setIncludedParseds(ks);
    }, 300);
    return () => clearTimeout(deb);
  }, [includedKeywords]);

  useEffect(() => {
    const deb = setTimeout(() => {
      const ks = parseValues(excludedKeywords);
      setExcludedParseds(ks);
    }, 300);
    return () => clearTimeout(deb);
  }, [excludedKeywords]);

  return (
    <PanelField
      content={
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <TextField
              fullWidth
              label='Enter Keywords'
              variant='outlined'
              onChange={(e) => setIncludedKeywords(e.target.value)}
              multiline
              rows={10}
              value={includedKeywords}
            />
            {Object.keys(includedParseds).map((match_type) => {
              return (
                <Typography
                  variant='body1'
                  key={match_type}
                  style={{ textTransform: 'capitalize' }}
                >
                  {match_type}: {includedParseds[match_type].join(', ')}
                </Typography>
              );
            })}
            <input
              type='hidden'
              name='targetings[included_keywords]'
              value={JSON.stringify(includedParseds)}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              label='Enter Exclude Keywords'
              variant='outlined'
              onChange={(e) => setExcludedKeywords(e.target.value)}
              multiline
              rows={10}
              value={excludedKeywords}
            />
            {Object.keys(excludedParseds).map((match_type) => {
              return (
                <Typography
                  variant='body1'
                  key={match_type}
                  style={{ textTransform: 'capitalize' }}
                >
                  {match_type}: {excludedParseds[match_type].join(', ')}
                </Typography>
              );
            })}
            <input
              type='hidden'
              name='targetings[excluded_keywords]'
              value={JSON.stringify(excludedParseds)}
            />
          </Grid>
        </Grid>
      }
    />
  );
};
