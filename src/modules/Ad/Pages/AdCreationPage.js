import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import ChooseAdType from './components/ChooseAdType';
import ChooseNetworks from './components/ChooseNetworks';
import { mdiArrowLeft } from '@mdi/js';
import Icon from '@mdi/react';
import CampaignNameInput from './components/CampaignNameInput';
import BiddingInputs from './components/BidInputs/BidInputs';

export default () => {
  const classes = useStyles();
  const [activeAccordions, setActiveAccordions] = useState(['networks', 'ad_type', 'ad_create']);

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
            expanded={true || activeAccordions.indexOf(step.name) > -1}
            onChange={() => handleAccordionChange(step.name)}
          >
            <AccordionSummary
              expandIcon={<Icon path={mdiArrowLeft} />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography className={classes.heading}>{step.label}</Typography>
              <Typography className={classes.secondaryHeading}>{step.description}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <step.component />
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordionDetails: {
    display: 'block',
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
    component: CampaignNameInput,
    label: 'Campaign Name',
    description: 'Choose Campaign Name',
    name: 'campaign_name',
  },
  {
    component: BiddingInputs,
    label: 'Bidding Options',
    description: 'Choose Bidding Options for each networks',
    name: 'bidding_options',
  },
];
