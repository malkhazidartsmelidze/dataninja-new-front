import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  FormControlLabel,
  FormGroup,
  Grid,
  makeStyles,
  Typography,
  Zoom,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const NetworkSuccesses = (props) => {
  const [open, setOpen] = useState(props.open);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog maxWidth='md' fullWidth onClose={handleClose} open={open}>
      <DialogTitle>Creating your Ad</DialogTitle>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <FormGroup>
              <CheckableStep
                checked={props.created.facebook.campaign}
                label='Created Facebook Campaign'
                stepName='facebook_campaign'
                currentStep={props.currentStep}
              />
              <CheckableStep
                checked={props.created.facebook.adgroup}
                label='Created Facebook Adgroup'
                stepName='facebook_adgroup'
                currentStep={props.currentStep}
              />
              <CheckableStep
                stepName='facebook_ad'
                currentStep={props.currentStep}
                checked={props.created.facebook.ad}
                label='Created Facebook Ad'
              />
            </FormGroup>
          </Grid>
          <Grid item xs={6} direction='column'>
            <FormGroup>
              <CheckableStep
                checked={props.created.google.campaign}
                label='Created Google Campaign'
                stepName='google_campaign'
                currentStep={props.currentStep}
              />
              <CheckableStep
                checked={props.created.google.adgroup}
                label='Created Google Adgroup'
                stepName='google_adgroup'
                currentStep={props.currentStep}
              />
              <CheckableStep
                stepName='google_ad'
                currentStep={props.currentStep}
                checked={props.created.google.ad}
                label='Created Google Ad'
              />
            </FormGroup>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const useCheckboxStyles = makeStyles({
  checked: {
    color: green[400],
  },
  loader: {
    margin: 12,
  },
});

const CheckableStep = (props) => {
  const classes = useCheckboxStyles();

  return (
    <FormControlLabel
      control={
        props.stepName === props.currentStep ? (
          <CircularProgress size={15} className={classes.loader} />
        ) : (
          <Zoom in={true}>
            <Checkbox
              classes={{
                checked: classes.checked,
              }}
              checked={props.checked}
            />
          </Zoom>
        )
      }
      label={props.label}
    />
  );
};

export default NetworkSuccesses;
