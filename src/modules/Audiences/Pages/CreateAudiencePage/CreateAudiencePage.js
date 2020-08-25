import React, { Fragment, useEffect, useState } from 'react';
import { SelectField } from 'components/Fields';
import { Divider, makeStyles, Fade } from '@material-ui/core';
import ReMarketingAudienceForm from './ReMarketingAudienceForm';
import CustomAudiencesForm from './CustomAudiencesForm';

export default () => {
  const classes = useStyles();
  const [audienceType, setAudienceType] = useState('custom');
  const [audienceForm, setAudienceForm] = useState(ReMarketingAudienceForm);

  const audienceTypeChanged = (e) => {
    setAudienceType(e.target.value);
  };

  return (
    <Fragment>
      <SelectField
        options={audienceOptions}
        value={audienceType}
        label='Choose Audience Type'
        style={{ width: 400 }}
        onChange={audienceTypeChanged}
      />
      <Divider className={classes.divider} />
      {audienceType == 'remarketing' && (
        <Fade>
          <ReMarketingAudienceForm />
        </Fade>
      )}
      {audienceType == 'custom' && (
        <Fade>
          <CustomAudiencesForm />
        </Fade>
      )}
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
