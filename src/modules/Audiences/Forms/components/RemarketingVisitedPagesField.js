import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import { TextField, Button, Grid, IconButton } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

export default () => {
  const [rules, setRules] = useState([
    { urlType: 'page_url', condition: 'equals', value: 'http://facebook.com' },
    { urlType: 'referrer_url', condition: 'ends_with', value: 'http://google.com' },
  ]);

  const [conditionType, setConditionType] = useState('or');

  const deleteRule = (key) => {
    setRules((r) => {
      r.splice(key, 1);
      return [...r];
    });
  };

  const addRule = () => {
    setRules([...rules, { urlType: 'page_url', condition: 'equals', value: '' }]);
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
        disabled={rules.filter((r) => r.value === '').length != 0}
      >
        {conditionType}
      </Button>
    );
  };

  const onChange = (index, field, value) => {
    if (!rules[index]) return;

    setRules((r) => {
      r[index][field] = value;
      return [...r];
    });
  };

  const changeConditionType = (e) => {
    setConditionType(e.target.value);
  };

  return (
    <PanelField
      title='Enter Audience Name'
      content={
        <>
          <SelectField
            onChange={changeConditionType}
            options={conditionTypeOptions}
            value={conditionType}
            style={{ marginBottom: 32 }}
          />
          {rules.map((rule, key) => {
            return (
              <SingleConditon
                key={key}
                index={key}
                urlType={rule.urlType}
                value={rule.value}
                condition={rule.condition}
                conditionType={conditionType}
                onChange={onChange}
                button={key == rules.length - 1 ? AddButton() : DeleteButton(key)}
              />
            );
          })}
        </>
      }
    />
  );
};

const SingleConditon = ({ urlType, condition, value, button, index, onChange }) => {
  const onFieldChange = (e) => {
    onChange(index, e.target.name, e.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <SelectField
          onChange={onFieldChange}
          name='urlType'
          fullWidth
          options={urlTypeOptions}
          value={urlType}
        />
      </Grid>
      <Grid item xs={3}>
        <SelectField
          fullWidth
          onChange={onFieldChange}
          name='condition'
          options={conditionOptions}
          value={condition}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField onChange={onFieldChange} name='value' fullWidth value={value} />
      </Grid>
      <Grid item xs={3}>
        {button}
      </Grid>
    </Grid>
  );
};

const urlTypeOptions = [
  { value: 'page_url', name: 'Page Url' },
  { value: 'referrer_url', name: 'Referrer Url' },
];

const conditionOptions = [
  { value: 'contains', name: 'Page Url' },
  { value: 'equals', name: 'Equals' },
  { value: 'starts_with', name: 'Starts With' },
  { value: 'ends_with', name: 'Ends With' },
  { value: 'does_not_contain', name: 'Does Not Contain' },
  { value: 'does_not_equal', name: 'Does Not Equal' },
  { value: 'does_not_starts_with', name: 'Does Not Starts With' },
  { value: 'does_not_ends_with', name: 'Does Not Ends With' },
];

const conditionTypeOptions = [
  { value: 'or', name: 'Match Every Rule Group' },
  { value: 'and', name: 'Match Any Rule Group' },
];
