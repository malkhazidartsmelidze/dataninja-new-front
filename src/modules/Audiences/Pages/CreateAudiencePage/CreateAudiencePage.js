import React, { Fragment, useEffect, useState } from 'react';
import { SelectField } from 'components/Fields';
import { Divider, makeStyles } from '@material-ui/core';
import ReMarketingAudienceForm from './ReMarketingAudienceForm';
import CustomAudiencesForm from './CustomAudiencesForm';

export default () => {
  const classes = useStyles();
  const [audienceType, setAudienceType] = useState('remarketing');
  const [audienceForm, setAudienceForm] = useState(ReMarketingAudienceForm);

  const audienceTypeChanged = (e) => {
    setAudienceType(e.target.value);
  };

  useEffect(() => {
    switch (audienceType) {
      case 'remarketing':
        return setAudienceForm(ReMarketingAudienceForm);
      case 'custom':
        return setAudienceForm(CustomAudiencesForm);
    }
  }, [audienceType]);

  return (
    <Fragment>
      <SelectField
        options={audienceOptions}
        value={audienceType}
        label='Choose Audience Type'
        onChange={audienceTypeChanged}
      />
      <Divider className={classes.divider} />
      {audienceForm}
    </Fragment>
  );
};

const audienceOptions = [
  { name: 'Custom Audiences', value: 'custom' },
  { name: 'Remarketing Audiences', value: 'remarketing' },
];

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
  },
}));
