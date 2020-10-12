import Alert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import UserService from 'services/UserService';
import useUser from 'store/UserContext';
import P from 'paths';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function GoogleAuthButton(props) {
  const [success, setSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState(null);
  const { refreshUser } = useUser();
  const [conf, setConf] = useState(false);
  const { config } = useUser();

  useEffect(() => {
    UserService.getGoogleLoginUrl().then((data) => {
      if (!data.url) return;
      setRedirectUrl(data.url);
    });
  }, []);

  useEffect(() => {
    if (!config) return;
    if (config.getAdAccounts('google').length) {
      // setSuccess(true);
      setTimeout(() => {
        conf && document.location.reload();
      }, 1000);
    }
  }, [config, conf]);

  if (success) {
    return (
      <Alert severity='success'>
        You successfully Connected your Google account to Dataninja! Go to{' '}
        <Link to={P.AD_CREATE}>Ad Creation</Link>
      </Alert>
    );
  }
  return (
    <Button disabled={redirectUrl === null} onClick={() => redirectUrl && window.open(redirectUrl)}>
      Login with google
    </Button>
  );
}
