import React, { useState, Fragment, useEffect } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import { TextField, Button, Grid, IconButton, Divider } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

const singleDefaultRule = { urlType: 'page_url', condition: 'equals', value: '' };

export default () => {
  const [condition, setCondition] = useState('or');
  const [rules, setRules] = useState([[{ ...singleDefaultRule }]]);
  const [addingDisabled, setAddingDisabled] = useState(true);

  const onChange = (index, newRules) => {
    setRules((o) => {
      o[index] = newRules;
      return [...o];
    });
  };

  const addNewRule = () => {
    setRules((o) => {
      o.push([{ ...singleDefaultRule }]);
      return [...o];
    });
  };
  console.log(rules);
  return (
    <PanelField
      title='Enter Audience Name'
      content={
        <Fragment>
          <input type='hidden' name='condition' value={condition} />
          {rules.map((r, key) => {
            return r.map((s, skey) => {
              return (
                <Fragment key={skey}>
                  <input
                    type='hidden'
                    name={`rules[${key}][${skey}][url_type]`}
                    value={s.urlType}
                  />
                  <input
                    type='hidden'
                    name={`rules[${key}][${skey}][condition]`}
                    value={s.condition}
                  />
                  <input type='hidden' name={`rules[${key}][${skey}][url]`} value={s.value} />
                </Fragment>
              );
            });
          })}
          <Grid container spacing={2} direction='column'>
            <Grid item>
              <SelectField
                onChange={(e) => setCondition(e.target.value)}
                options={conditionTypeOptions}
                value={condition}
              />
            </Grid>
            <Grid item>
              {rules.map((r, key) => {
                return (
                  <div>
                    <SingleRuleItem
                      index={key}
                      key={key}
                      condition={condition}
                      rules={r}
                      onChange={onChange}
                      setAddingDisabled={setAddingDisabled}
                    />
                    <Divider style={{ margin: '16px 0' }} />
                  </div>
                );
              })}
            </Grid>
          </Grid>
          <Grid>
            <Button
              variant='contained'
              color='primary'
              onClick={addNewRule}
              disabled={addingDisabled}
            >
              {condition == 'or' ? 'And' : 'Or'}
            </Button>
          </Grid>
        </Fragment>
      }
    />
  );
};

const SingleRuleItem = ({
  index,
  condition,
  rules: defaultRules,
  onChange,
  setAddingDisabled: parentAddingDisabled,
}) => {
  const [rules, setRules] = useState(defaultRules);
  const [addingDisabled, setAddingDisabled] = useState(true);

  const deleteRule = (key) => {
    setRules((r) => {
      r.splice(key, 1);
      return [...r];
    });
  };

  const addNewRule = () => {
    const newValue = rules.length ? { ...rules[rules.length - 1] } : { ...singleDefaultRule };
    newValue.value = '';
    setRules([...rules, newValue]);
  };

  const onRuleFidldChange = (ind, target) => {
    const field = target.name;
    setRules((o) => {
      o[ind][field] = target.value;
      return [...o];
    });
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
      <Button variant='contained' color='primary' onClick={addNewRule} disabled={addingDisabled}>
        {condition}
      </Button>
    );
  };

  useEffect(() => {
    const disabled = Boolean(rules.find((r) => r.value == ''));
    setAddingDisabled(disabled);
    parentAddingDisabled(disabled);
    const deb = setTimeout(() => onChange(index, rules), 300);
    return () => clearTimeout(deb);
  }, [rules]);

  return rules.map((rule, key) => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SelectField
            name='urlType'
            onChange={(e) => onRuleFidldChange(key, e.target)}
            fullWidth
            options={urlTypeOptions}
            value={rule.urlType}
          />
        </Grid>
        <Grid item xs={3}>
          <SelectField
            name='condition'
            onChange={(e) => onRuleFidldChange(key, e.target)}
            fullWidth
            options={conditionOptions}
            value={rule.condition}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name='value'
            onChange={(e) => onRuleFidldChange(key, e.target)}
            fullWidth
            value={rule.value}
          />
        </Grid>
        <Grid item xs={3}>
          {key == rules.length - 1 ? AddButton() : DeleteButton(key)}
        </Grid>
      </Grid>
    );
  });
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
