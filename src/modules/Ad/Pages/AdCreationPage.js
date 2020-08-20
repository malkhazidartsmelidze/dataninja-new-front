import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import ChooseAdType from './components/ChooseAdType';
import ChooseNetworks from './components/ChooseNetworks';
import CreateAdForm from './components/CreateAdForm';
import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';

export default () => {
  const classes = useStyles();
  const [activeAccordions, setActiveAccordions] = useState(['networks']);

  const handleAccordionChange = (name) => {
    setActiveAccordions((old) => {
      if (old.indexOf(name) > -1) {
        old.splice(old.indexOf(name), 1);
      } else {
        old.push(name);
      }
      return [...old];
    });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        {steps.map((step) => (
          <Accordion
            key={step.name}
            expanded={activeAccordions.indexOf(step.name) > -1}
            onChange={() => handleAccordionChange(step.name)}
          >
            <AccordionSummary
              expandIcon={<Icon path={mdiPlus} />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography className={classes.heading}>{step.label}</Typography>
              <Typography className={classes.secondaryHeading}>{step.description}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <step.component />
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const steps = [
  {
    component: ChooseNetworks,
    label: 'Choose Networks',
    description: 'Select Networks where you want to create ads',
    name: 'networks',
  },
  {
    component: ChooseAdType,
    label: 'Select Ad Type',
    description: 'Choose Ad types',
    name: 'ad_types',
  },
  {
    component: CreateAdForm,
    label: 'Create Ad Config',
    description: 'Create Ad Config',
    name: 'ad_create',
  },
  // {
  //   name: 'ad_createss',
  //   component: ChooseAdType,
  //   label: 'Review & Publish Your Ad',
  // },
];
