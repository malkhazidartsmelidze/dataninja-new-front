import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, StepContent, Grid } from '@material-ui/core';
import ChooseAdType from './components/ChooseAdType';
import ChooseNetworks from './components/ChooseNetworks';
import StepSwitcher from './components/StepSwitcher';
import { useNewAdContext } from 'store/NewAdContext';
import CreateAdForm from './components/CreateAdForm';

export default () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(2);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container>
      <Grid item md={8} xs={12}>
        <Stepper activeStep={activeStep} orientation='vertical'>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <div className={classes.stepContent}>
                  <step.component />
                  <StepSwitcher
                    onNext={handleNext}
                    onPrevious={handleBack}
                    activeStep={activeStep}
                  />
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  stepContent: {
    paddingTop: theme.spacing(5),
  },
}));

const getSteps = () => {
  return [
    {
      component: ChooseNetworks,
      label: 'Select Networks',
    },
    {
      component: ChooseAdType,
      label: 'Select Ad Type',
    },
    {
      component: CreateAdForm,
      label: 'Create Campaign AD & Asets',
    },
    {
      component: ChooseAdType,
      label: 'Review & Publish Your Ad',
    },
  ];
};
