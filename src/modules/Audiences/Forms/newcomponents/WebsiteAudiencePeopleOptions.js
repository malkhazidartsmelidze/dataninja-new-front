import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment, Grid, IconButton, Icon, Button } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import { mdiDelete } from '@mdi/js';
import { AudienceRulesField } from '.';
import WebsiteVisitorOptions from './WebsiteVisitorOptions';

export default ({ peopletype }) => {
  const inputStyle = { width: 200 };
  const [visitorType, setVisitorType] = useState('all_visitors');

  return (
    <PanelField
      content={
        <Grid container spacing={1} direction='column'>
          <Grid container spacing={1} direction='row'>
            <Grid item>
              {visitorType !== 'all_visitors' && (
                <SelectField
                  label='Select Visitor Type'
                  options={visitorTypeOptions}
                  name={`rules[${peopletype}][visitor_type]`}
                  style={inputStyle}
                  onChange={(e) => setVisitorType(e.target.value)}
                />
              )}
            </Grid>
            {visitorType === 'visitors_by_time' && (
              <Grid item>
                <SelectField
                  options={timePercentOptions}
                  name={`rules[${peopletype}][time_percents]`}
                  style={inputStyle}
                  label='Select Percent'
                />
              </Grid>
            )}
            <Grid item>
              <TextField
                type='number'
                label='Enter Days'
                name={`rules[${peopletype}][days]`}
                InputProps={{
                  endAdornment: <InputAdornment>Days</InputAdornment>,
                  startAdornment: (
                    <InputAdornment style={{ paddingRight: 8 }}>In The Past</InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ marginTop: 32 }}>
            <WebsiteVisitorOptions peopletype={peopletype} />
          </Grid>
        </Grid>
      }
    />
  );
};

const visitorTypeOptions = [
  { name: 'All website visitors', value: 'all_visitors' },
  { name: 'People who visited specific web pages', value: 'specific_page_visitors' },
  { name: 'Visitors by time spent', value: 'visitors_by_time' },
];
const timePercentOptions = [
  { name: 'Top 25%', value: '25' },
  { name: 'Top 10%', value: '10' },
  { name: 'Top 5%', value: '5' },
];
