import React, { useState } from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { TextField, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { useEffect } from 'react';

export default () => {
  const { setField, getField } = useNewAdContext();
  const _subject = getField('gmail_subject');
  const _description = getField('gmail_description');
  const platforms = getField('platforms').value || [];
  const [subject, setSubject] = useState(_subject.value);
  const [description, setDescription] = useState(_description.value);

  useEffect(() => {
    if (subject == _subject.value) return;
    const deb = setTimeout(() => setField('gmail_subject', subject), 500);
    return () => clearTimeout(deb);
  }, [subject]);

  useEffect(() => {
    if (description == _description.value) return;
    const deb = setTimeout(() => setField('gmail_description', description), 500);
    return () => clearTimeout(deb);
  }, [description]);

  if (platforms.indexOf('gmail') === -1) {
    return <div>Please Choose Gmail Platform</div>;
  }

  return (
    <PanelField
      content={
        <Grid container direction='column'>
          <Grid item>
            <TextField
              name='subject'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder='Enter Gmail Subject'
            />
          </Grid>
          <Grid item>
            <TextField
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Enter Gmail Description'
            />
          </Grid>
        </Grid>
      }
    />
  );
};
