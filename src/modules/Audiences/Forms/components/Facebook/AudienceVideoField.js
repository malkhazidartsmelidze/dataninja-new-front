import React, { useState, Fragment } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import Gallery from 'components/Gallery';
import api from 'common/api';
import { useEffect } from 'react';
import { Button } from '@material-ui/core';

export default () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    api.get('/utils/facebook-videos').then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, []);

  return (
    <PanelField
      content={
        <Fragment>
          <Button onClick={() => setOpen(true)} variant='contained'>
            Browse Videos
          </Button>
          <Gallery open={open} handleClose={() => setOpen(false)} data={data} />
        </Fragment>
      }
    />
  );
};
