import Alert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import UserService from 'services/UserService';
import useUser from 'store/UserContext';
import P from 'paths';
import { Link } from 'react-router-dom';

export default function FacebookAuthButton(props) {
  const [success, setSuccess] = useState(false);
  const { refreshUser } = useUser();
  const [conf, setConf] = useState(false);
  const { config } = useUser();

  const callback = (response) => {
    UserService.facebookLogin(response).then((data) => {
      setConf(true);
      refreshUser();
    });
  };

  useEffect(() => {
    if (!config) return;
    if (config.getAdAccounts('facebook').length) {
      setSuccess(true);
      setTimeout(() => {
        conf && document.location.reload();
      }, 1000);
    }
  }, [config, conf]);

  if (success) {
    return (
      <Alert severity='success'>
        You successfully Connected your facebook account to Dataninja! Go to{' '}
        <Link to={P.AD_CREATE}>Ad Creation</Link>
      </Alert>
    );
  }
  return (
    <FacebookLogin
      appId='996494977506145'
      scope='ads_management,ads_read,business_management,pages_show_list,pages_read_engagement'
      callback={callback}
    />
  );
}
