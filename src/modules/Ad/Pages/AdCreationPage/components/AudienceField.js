import React, { useState, Fragment, useEffect } from 'react';
import { Button, Dialog, DialogContent, Grid } from '@material-ui/core';
import { CreateAudiencePage } from 'modules/Audiences/Pages';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import { Audience } from 'Models/Audience';

export default () => {
  const [audienceModalOpen, setAudienceModalOpen] = useState(false);
  const [googleAudiences, setGoogleAudiences] = useState([]);
  const [facebookAudiences, setFacebookAudiences] = useState([]);

  const handleClose = () => {
    setAudienceModalOpen(false);
  };

  useEffect(() => {
    Audience.service.getGoogleAudiences().then((data) => {
      if (!Array.isArray(data)) return;
      setGoogleAudiences(data);
    });

    Audience.service.getFacebookAudiences().then((data) => {});
  }, []);

  return (
    <PanelField
      content={
        <Fragment>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SelectField
                label='Choose Facebook Audience'
                options={facebookAudiences}
                style={{ width: 200, marginRight: 16 }}
              />

              <SelectField
                label='Choose Google Audience'
                options={googleAudiences}
                style={{ width: 200 }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button onClick={() => setAudienceModalOpen(true)} variant='contained'>
                Or Create New Audience
              </Button>
              <Dialog onClose={handleClose} open={audienceModalOpen}>
                <DialogContent style={{ padding: 8, boxShadow: 'none' }}>
                  <CreateAudiencePage />
                </DialogContent>
              </Dialog>
            </Grid>
          </Grid>
        </Fragment>
      }
    />
  );
};
