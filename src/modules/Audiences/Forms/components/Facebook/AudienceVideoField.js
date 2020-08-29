import React, { useState, Fragment } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import Gallery from 'components/Gallery';
import api from 'common/api';
import { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { SelectField } from 'components/Fields';
import useUser from 'store/UserContext';
import AdAccount from 'Models/AdAccount/AdAccount';

export default ({ name, onChange }) => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [videoIds, setVideoIds] = useState([]);
  const [facebookPages, setFacebookPages] = useState([]);
  const { config } = useUser();

  useEffect(() => {
    api.get('/utils/facebook-videos').then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    onChange && onChange(name, videoIds);
  }, [videoIds]);

  useEffect(() => {
    const account = config.getDefaultAccount('facebook');
    if (!(account instanceof AdAccount)) return console.error('not default faecook account');

    account.getPages((acc) => {
      console.log(acc);
    });
  }, [config]);

  return (
    <PanelField
      content={
        <Fragment>
          {/* <SelectField /> */}
          <Button onClick={() => setOpen(true)} variant='contained'>
            Browse Videos
          </Button>
          <Gallery
            onChoose={(ids) => setVideoIds(ids)}
            multiple
            open={open}
            handleClose={() => setOpen(false)}
            data={data}
          />
        </Fragment>
      }
    />
  );
};
