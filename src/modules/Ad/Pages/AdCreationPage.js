import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
} from '@material-ui/core';
import ChooseAdType from './components/ChooseAdType';
import ChooseNetworks from './components/ChooseNetworks';
import StepSwitcher from './components/StepSwitcher';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
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
      component: ChooseAdType,
      label: 'Create Campaign AD & Asets',
    },
    {
      component: ChooseAdType,
      label: 'Create an ad',
    },
  ];
};

export default () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <step.component />
              <StepSwitcher onNext={handleNext} onPrevious={handleBack} activeStep={activeStep} />
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
