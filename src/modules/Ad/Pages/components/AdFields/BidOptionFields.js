import React, { useEffect, useState } from 'react';
import {
  MenuItem,
  TextField,
  Grid,
  Typography,
  Hidden,
  InputAdornment,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
} from '@material-ui/core';
import { useNewAdContext } from 'store/NewAdContext';
import { mdiCurrencyEur } from '@mdi/js';
import Icon from '@mdi/react';
import PanelField from 'components/ExpansionPanel/PanelField';
import FacebookBidOptions from './components/FacebookBidOptions';
import GoogleBidOptions from './components/GoogleBidOptions';
/**
 * If facebook pay_per_click is chosen make link_clicks
 */
export default () => {
  return (
    <PanelField
      content={[
        <Grid container spacing={2}>
          <Grid item>
            <Card>
              <CardContent>
                <Typography color='textSecondary' gutterBottom>
                  Facebook
                </Typography>
                <FacebookBidOptions />
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardContent>
                <Typography color='textSecondary' gutterBottom>
                  Google
                </Typography>
                <GoogleBidOptions />
              </CardContent>
            </Card>
          </Grid>
        </Grid>,
      ]}
    />
  );
};
