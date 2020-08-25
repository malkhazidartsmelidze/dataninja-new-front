import React, { useState } from 'react';
import {
  makeStyles,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@material-ui/core';
import { mdiPlus, mdiMinus } from '@mdi/js';
import Icon from '@mdi/react';

export default (props) => {
  const [expanded, setExpanded] = useState(false);
  const { text, subText, doc, children } = props;
  const classes = useStyles();

  const handleAccordionTitleClick = () => {
    return handleAccordionIconClick();
    if (expanded) return;
    setExpanded(true);
  };

  const handleAccordionIconClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} classes={{}}>
      <AccordionSummary
        expandIcon={
          <Icon path={expanded ? mdiMinus : mdiPlus} onClick={handleAccordionIconClick} />
        }
        onClick={handleAccordionTitleClick}
      >
        <Typography className={classes.heading}>{text}</Typography>
        <Typography className={classes.secondaryHeading}>{subText}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>{children}</AccordionDetails>
    </Accordion>
  );
};

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '25%',
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
