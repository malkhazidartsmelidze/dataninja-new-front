import React, { Fragment, useState } from 'react';
import { SelectField } from 'components/Fields';
import { Divider, makeStyles, Fade, Grid } from '@material-ui/core';
import {
  GoogleRemarketingAudienceForm,
  GoogleCustomAudienceForm,
  FacebookVideoAudienceForm,
  FacebookWebsiteAudienceForm,
} from 'modules/Audiences/Forms';
import GoogleAudienceForm from 'modules/Audiences/Forms/GoogleAudienceForm/GoogleAudienceForm';

export default () => {
  const classes = useStyles();
  const [network, setNetwork] = useState('facebook');
  const [audienceType, setAudienceType] = useState('video');

  const audienceTypeChanged = (e) => {
    setAudienceType(e.target.value);
  };

  const networkChanged = (e) => {
    setNetwork(e.target.value);
  };

  var AudienceForm = null;

  if (audienceType === 'remarketing') {
    AudienceForm = GoogleRemarketingAudienceForm;
  } else if (audienceType === 'custom') {
    AudienceForm = GoogleCustomAudienceForm;
  } else if (audienceType === 'video') {
    AudienceForm = FacebookVideoAudienceForm;
  } else if (audienceType === 'website') {
    AudienceForm = FacebookWebsiteAudienceForm;
  } else if (audienceType === 'google_audience') {
    AudienceForm = GoogleAudienceForm;
  } else {
    return null;
  }

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item>
          <SelectField
            options={networkOptions}
            value={network}
            label='Choose Network'
            style={{ width: 200 }}
            onChange={networkChanged}
          />
        </Grid>
        <Grid item>
          <SelectField
            options={audienceOptions[network]}
            value={audienceType}
            label='Choose Audience Type'
            style={{ width: 400 }}
            onChange={audienceTypeChanged}
          />
        </Grid>
      </Grid>

      <Divider className={classes.divider} />
      <Grid container>
        <Grid item xs={12}>
          <AudienceForm />
        </Grid>
      </Grid>
    </Fragment>
  );
};

const audienceOptions = {
  google: [
    { name: 'Custom Audiences', value: 'custom' },
    { name: 'Remarketing Audiences', value: 'remarketing' },
    { name: 'Audience', value: 'google_audience' },
  ],
  facebook: [
    { name: 'Video', value: 'video' },
    { name: 'Website', value: 'website' },
  ],
};

const networkOptions = [
  { name: 'Google', value: 'google' },
  { name: 'Facebook', value: 'facebook' },
];

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
  },
}));
