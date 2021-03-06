import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';

export default (props) => {
  const { title, leftContent, content, helper } = props;
  const classes = useStyles();

  return (
    <Grid container alignItems='center'>
      <Grid item xs={3}>
        {leftContent}
      </Grid>
      <Grid item xs={9}>
        {helper && (
          <Typography variant='body1' color='textSecondary'>
            {helper}
          </Typography>
        )}
        {content ? content : props.children}
      </Grid>
    </Grid>
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
