import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';
import User from 'common/objects/User';
import useUser from 'store/UserContext';
import { useEffect } from 'react';

const Login = () => {
  const { login: loginUser, loading: loginLoading } = useUser();
  const [loading, setLoading] = useState(loginLoading);

  const [error, setError] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);
    User.service
      .login({
        email: state.email,
        password: state.password,
      })
      .then((user) => {
        setLoading(false);
        loginUser(user);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    setLoading(loginLoading);
  }, [loginLoading]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <form>
        <TextField
          variant='outlined'
          error={error}
          value={state.email}
          onChange={handleChange}
          name='email'
          autoComplete='off'
        />
        <TextField
          variant='outlined'
          error={error}
          value={state.password}
          onChange={handleChange}
          name='password'
          type='password'
          autoComplete='off'
        />
      </form>
      <Button onClick={handleSubmit}>Log In</Button>
    </div>
  );
};

export default Login;
