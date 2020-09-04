import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {
  mdiFacebook,
  mdiGoogle,
  mdiCrosshairs,
  mdiCursorDefaultClick,
  mdiFaceProfile,
  mdiSearchWeb,
} from '@mdi/js';
import Icon from '@mdi/react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [network, setNetwork] = useState('ninja');
  const [goal, setGoal] = useState('traffic');

  const handleNetworkChange = (_e, newNetwork) => {
    setNetwork(newNetwork);
  };

  const handleGoalChange = (_e, newGoal) => {
    setGoal(newGoal);
  };

  const startAdCreation = () => {
    const url = `/app/ad/new/${network}/${goal}`;
    history.push(url);
  };

  useEffect(() => {
    if (network === 'facebook' && goal === 'search') {
      setGoal('traffic');
    }
    if (goal === 'search') {
      setNetwork('google');
    }
  }, [network, goal]);

  return (
    <Grid container spacing={2} direction='column'>
      <Grid item>
        <Typography variant='body2'>Please Select Network</Typography>
        <ToggleButtonGroup size='medium' value={network} exclusive onChange={handleNetworkChange}>
          <ToggleButton className={classes.button} value='ninja' disabled={goal == 'search'}>
            <Icon path={mdiCrosshairs} className={classes.iconButton} size={1} /> Ninja (All)
          </ToggleButton>
          <ToggleButton className={classes.button} value='google'>
            <Icon path={mdiGoogle} className={classes.iconButton} size={1} /> Google
          </ToggleButton>
          <ToggleButton className={classes.button} value='facebook' disabled={goal == 'search'}>
            <Icon path={mdiFacebook} className={classes.iconButton} size={1} /> Facebook
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item>
        <Typography variant='body2'>Please Select Goal</Typography>
        <ToggleButtonGroup size='medium' value={goal} exclusive onChange={handleGoalChange}>
          <ToggleButton className={classes.button} value='traffic'>
            <Icon path={mdiCursorDefaultClick} className={classes.iconButton} size={1} /> Website
            Traffic
          </ToggleButton>
          <ToggleButton className={classes.button} value='conversions'>
            <Icon path={mdiFaceProfile} className={classes.iconButton} size={1} /> Conversions
          </ToggleButton>
          <ToggleButton className={classes.button} value='search' disabled={network === 'facebook'}>
            <Icon path={mdiSearchWeb} className={classes.iconButton} size={1} /> Search
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item>
        <Button variant='contained' color='primary' onClick={startAdCreation}>
          Start Creation
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  button: {
    color: '#000',
  },
  iconButton: {
    marginRight: 8,
  },
}));
