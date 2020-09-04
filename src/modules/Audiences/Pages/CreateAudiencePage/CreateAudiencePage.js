import React, { Fragment, useState } from 'react';
import { SelectField } from 'components/Fields';
import { Divider, makeStyles, Fade, Grid } from '@material-ui/core';
import { GoogleRemarketingAudienceForm, GoogleCustomAudienceForm } from 'modules/Audiences/Forms';

export default () => {
  const classes = useStyles();
  const [audienceType, setAudienceType] = useState('custom');

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
      <Grid container>
        <Grid item xs={12}>
          {audienceType == 'remarketing' && (
            <Fade>
              <GoogleRemarketingAudienceForm />
            </Fade>
          )}
          {audienceType == 'custom' && (
            <Fade>
              <GoogleCustomAudienceForm />
            </Fade>
          )}
        </Grid>
      </Grid>
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
