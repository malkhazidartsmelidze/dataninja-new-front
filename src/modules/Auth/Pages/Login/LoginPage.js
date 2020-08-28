import React, { useState, useEffect } from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useUser from 'store/UserContext';
import User from 'Models/User/User';

export default () => {
  const classes = useStyles();
  const { login: loginUser } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    User.service
      .login({
        email: state.email,
        password: state.password,
      })
      .then((user) => {
        console.log(user);
        loginUser(user);
      })
      .catch((err) => {
        setError(true);
      })
      .then(() => setLoading(false));
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <img
          className={classes.logo}
          src='https://avatars3.githubusercontent.com/u/63467770?s=400&u=0305324cc94aa96af2dbed2106a05e8017573fe4&v=4'
        />
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            error={error}
            fullWidth
            label='Email Address'
            name='email'
            autoComplete='email'
            size='small'
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            error={error}
            size='small'
            autoComplete='current-password'
            onChange={handleChange}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {loading ? <CircularProgress color='inherit' size={'2rem'} /> : 'Sign In'}
          </Button>
        </form>
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    margin: theme.spacing(1),
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));
