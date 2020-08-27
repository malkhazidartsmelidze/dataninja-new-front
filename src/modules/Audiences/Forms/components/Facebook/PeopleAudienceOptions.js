import React, { useState } from 'react';
import { TextField, InputAdornment, Grid, IconButton, Icon, Button } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import { mdiDelete } from '@mdi/js';
import { AudienceRulesField } from '.';

export default () => {
  const pixelOptions = [{ name: 'Pixel 1', value: 'pixel1' }];
  const peopleTypeOptions = [
    { name: 'All website visitors', value: 'all_visitors' },
    { name: 'People who visited specific web pages', value: 'specific_page_visitors' },
    { name: 'Visitors by time spent', value: 'visitors_by_time' },
  ];
  const timePercentOptions = [
    { name: 'Top 25%', value: '25' },
    { name: 'Top 10%', value: '10' },
    { name: 'Top 5%', value: '5' },
  ];

  const inputStyle = { width: 200 };

  const [pixel, setPixel] = useState('pixel1');
  const [period, setPeriod] = useState(30);
  const [peopleType, setPeopleType] = useState('all_visitors');
  const [timePercent, setTimePercent] = useState('25');
  const [rules, setRules] = useState([
    { urlType: 'url', condition: 'equals', values: ['http://facebook.com', 'http://google.com'] },
    { urlType: 'url', condition: 'contains', values: ['http://google.com'] },
  ]);

  const onPixelChange = (e) => {
    setPixel(e.target.value);
  };

  const onTimePercentChange = (e) => {
    setTimePercent(e.target.value);
  };

  const onPeopleTypeChange = (e) => {
    setPeopleType(e.target.value);
  };

  const deleteRule = (key) => {
    setRules((r) => {
      r.splice(key, 1);
      return [...r];
    });
  };

  const addRule = () => {
    setRules([...rules, { urlType: 'url', condition: 'contains', values: [] }]);
  };

  const DeleteButton = (key) => {
    return (
      <IconButton onClick={() => deleteRule(key)}>
        <Icon path={mdiDelete} />
      </IconButton>
    );
  };

  const AddButton = () => {
    return (
      <Button
        variant='contained'
        color='primary'
        onClick={addRule}
        disabled={rules.filter((r) => r.values.length === 0).length !== 0}
      >
        And
      </Button>
    );
  };

  const onChangeRule = (index, field, value) => {
    if (!rules[index]) return;

    setRules((r) => {
      r[index][field] = value;
      return [...r];
    });
  };

  return (
    <PanelField
      content={
        <Grid container spacing={1} direction='column'>
          <Grid item>
            <SelectField
              options={pixelOptions}
              style={inputStyle}
              value={pixel}
              onChange={onPixelChange}
              label='Select Pixel'
            />
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <SelectField
                  options={peopleTypeOptions}
                  style={inputStyle}
                  value={peopleType}
                  onChange={onPeopleTypeChange}
                  label='Select type'
                />
              </Grid>
              {peopleType == 'visitors_by_time' && (
                <Grid item>
                  <SelectField
                    options={timePercentOptions}
                    style={inputStyle}
                    value={timePercent}
                    onChange={onTimePercentChange}
                    label='Select Percent'
                  />
                </Grid>
              )}
              <Grid item>
                <TextField
                  name='audience_name'
                  type='number'
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  label='Enter Days'
                  InputProps={{
                    endAdornment: <InputAdornment>days</InputAdornment>,
                    startAdornment: (
                      <InputAdornment style={{ paddingRight: 8 }}>In The Past</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} style={{ marginTop: 32 }}>
                {rules.map((rule, key) => {
                  return (
                    <AudienceRulesField
                      key={key}
                      index={key}
                      urlType={rule.urlType}
                      values={rule.values}
                      condition={rule.condition}
                      onChange={onChangeRule}
                      button={key == rules.length - 1 ? AddButton() : DeleteButton(key)}
                    />
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      }
    />
  );
};
