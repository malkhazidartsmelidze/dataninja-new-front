import React from 'react';
import { Link } from 'react-router-dom';
import P from 'paths';

export default () => {
  return (
    <div>
      <h1>
        Error 404 Go <Link to={P.DASHBOARD_MODULE}> Dashboard </Link> OR{' '}
        <Link to={P.LOGIN_MODULE}>Login</Link>
      </h1>
    </div>
  );
};
