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
import clsx from 'clsx';

export default (props) => {
  const [expanded, setExpanded] = useState(props.expanded);
  const {
    title,
    subTitle,
    children,
    subTitleWhenOpen,
    titleWhenOpen,
    titleBefore,
    subTitleBefore,
    transparent,
  } = props;
  const classes = useStyles();

  const handleAccordionTitleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {(titleBefore || subTitleBefore) && (
        <div>
          <Typography className={classes.contentBeforeTitle} color='textPrimary'>
            {titleBefore}
          </Typography>
          <Typography className={classes.contentBeforeSubTitle} color='textPrimary'>
            {subTitleBefore}
          </Typography>
        </div>
      )}
      <Accordion expanded={expanded} classes={{}}>
        <AccordionSummary
          expandIcon={<Icon path={expanded ? mdiMinus : mdiPlus} />}
          onClick={handleAccordionTitleClick}
        >
          <Typography className={classes.heading}>
            {titleWhenOpen && expanded ? titleWhenOpen : title}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {subTitleWhenOpen && expanded ? subTitleWhenOpen : subTitle}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          className={clsx(classes.accordionDetails, transparent && classes.transparent)}
        >
          {children}
        </AccordionDetails>
      </Accordion>
    </>
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
  transparent: {
    background: 'transparent',
  },
  contentBeforeTitle: {
    fontSize: '16px',
    margin: '44px 0 8px 8px',
  },
  contentBeforeSubTitle: {
    margin: theme.spacing(0, 0, 1, 1),
    fontSize: '13px',
  },
}));
